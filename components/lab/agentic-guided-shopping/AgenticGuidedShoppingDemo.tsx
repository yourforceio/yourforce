"use client";

import {
  Bot,
  CheckCircle2,
  MapPin,
  PackageCheck,
  Send,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";

import { useState } from "react";

import { agenticGuidedShopping } from "@/data/agentic-guided-shopping";

import type {
  GuidedShoppingMessage,
  GuidedShoppingProduct,
} from "@/types/agentic-guided-shopping";

const formatCurrency = (
  value: number,
) =>
  new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    },
  ).format(value);

const createMessageId = () =>
  `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`;

function ProductVisual({
  product,
}: {
  product: GuidedShoppingProduct;
}) {
  return (
    <div
      className="
        relative
        aspect-[4/5]
        overflow-hidden
        rounded-2xl
      "
      style={{
        background:
          `linear-gradient(145deg, ${product.visual.from}, ${product.visual.to})`,
      }}
    >
      <div
        className="
          absolute
          -right-12
          -top-12
          h-36
          w-36
          rounded-full
          bg-white/35
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
        "
      >
        <ShoppingBag
          aria-hidden="true"
          className="
            h-16
            w-16
          "
          strokeWidth={1.2}
          style={{
            color:
              product.visual.accent,
          }}
        />
      </div>
    </div>
  );
}

function extractBudget(
  query: string,
) {
  const match =
    query.match(
      /(?:under|below|less than|max|maximum|up to)\s*\$?\s*(\d+)/i,
    );

  if (!match?.[1]) {
    return null;
  }

  return Number(
    match[1],
  );
}

function scoreProduct(
  product: GuidedShoppingProduct,
  query: string,
) {
  const normalized =
    query.toLowerCase();

  let score = 0;

  const searchable = [
    product.name,
    product.category,
    product.description,
    ...product.attributes,
    ...product.useCases,
    ...product.keywords,
  ].map(
    (value) =>
      value.toLowerCase(),
  );

  const words =
    normalized
      .replace(
        /[^a-z0-9\s]/g,
        " ",
      )
      .split(/\s+/)
      .filter(
        (word) =>
          word.length > 2,
      );

  words.forEach(
    (word) => {
      if (
        searchable.some(
          (value) =>
            value.includes(
              word,
            ),
        )
      ) {
        score += 10;
      }
    },
  );

  if (
    normalized.includes(
      product.name.toLowerCase(),
    )
  ) {
    score += 50;
  }

  return score;
}

export default function AgenticGuidedShoppingDemo() {
  const {
    assistant,
    products,
  } =
    agenticGuidedShopping;

  const [
    input,
    setInput,
  ] =
    useState("");

  const [
    messages,
    setMessages,
  ] =
    useState<
      GuidedShoppingMessage[]
    >([
      {
        id:
          "welcome",

        role:
          "assistant",

        text:
          assistant.introduction,
      },
    ]);

  const [
    recommendations,
    setRecommendations,
  ] =
    useState<
      GuidedShoppingProduct[]
    >([]);

  const [
    selectedProduct,
    setSelectedProduct,
  ] =
    useState<GuidedShoppingProduct | null>(
      null,
    );

  const [
    pickupChecked,
    setPickupChecked,
  ] =
    useState(false);

  const runAgent = (
    message: string,
  ) => {
    const normalized =
      message
        .trim()
        .toLowerCase();

    const availabilityIntent =
      normalized.includes(
        "available",
      ) ||
      normalized.includes(
        "pickup",
      ) ||
      normalized.includes(
        "near me",
      ) ||
      normalized.includes(
        "store",
      );

    if (
      availabilityIntent &&
      recommendations.length > 0
    ) {
      const available =
        recommendations.filter(
          (product) =>
            product.pickup.quantity > 0,
        );

      setRecommendations(
        available,
      );

      setPickupChecked(
        true,
      );

      return {
        text:
          available.length > 0
            ? `I checked the simulated store inventory. ${available.length} of the recommended products are available for pickup nearby. The closest options are shown below.`
            : "None of the current recommendations are available for simulated store pickup.",
      };
    }

    const budget =
      extractBudget(
        message,
      );

    const ranked =
      products
        .map(
          (product) => ({
            product,

            score:
              scoreProduct(
                product,
                message,
              ),
          }),
        )
        .filter(
          ({
            product,
            score,
          }) => {
            if (
              budget !== null &&
              product.price > budget
            ) {
              return false;
            }

            return score > 0;
          },
        )
        .sort(
          (a, b) =>
            b.score -
            a.score,
        )
        .slice(
          0,
          3,
        )
        .map(
          ({
            product,
          }) =>
            product,
        );

    const fallback =
      products
        .filter(
          (product) =>
            budget === null ||
            product.price <= budget,
        )
        .slice(
          0,
          3,
        );

    const results =
      ranked.length > 0
        ? ranked
        : fallback;

    setRecommendations(
      results,
    );

    setPickupChecked(
      false,
    );

    setSelectedProduct(
      null,
    );

    if (
      results.length === 0
    ) {
      return {
        text:
          "I couldn't find a product matching those constraints. Try adjusting the budget or describing the use case differently.",
      };
    }

    const budgetText =
      budget !== null
        ? ` within your ${formatCurrency(
            budget,
          )} budget`
        : "";

    return {
      text:
        `I found ${results.length} options${budgetText}. I prioritized products whose attributes and use cases best match your request. You can inspect the recommendations below or ask which are available for pickup.`,
    };
  };

  const sendMessage = (
    message: string,
  ) => {
    const trimmed =
      message.trim();

    if (!trimmed) {
      return;
    }

    const userMessage:
      GuidedShoppingMessage =
      {
        id:
          createMessageId(),

        role:
          "user",

        text:
          trimmed,
      };

    const response =
      runAgent(
        trimmed,
      );

    const assistantMessage:
      GuidedShoppingMessage =
      {
        id:
          createMessageId(),

        role:
          "assistant",

        text:
          response.text,
      };

    setMessages(
      (current) => [
        ...current,
        userMessage,
        assistantMessage,
      ],
    );

    setInput("");
  };

  const handleSubmit =
    () => {
      sendMessage(
        input,
      );
    };

  const resetConversation =
    () => {
      setMessages([
        {
          id:
            "welcome",

          role:
            "assistant",

          text:
            assistant.introduction,
        },
      ]);

      setInput("");

      setRecommendations(
        [],
      );

      setSelectedProduct(
        null,
      );

      setPickupChecked(
        false,
      );
    };

  return (
    <div
      className="
        overflow-hidden
        rounded-[2rem]
        border
        border-slate-200
        bg-white
        shadow-2xl
        shadow-slate-950/10
      "
    >
      <div
        className="
          flex
          items-center
          justify-between
          gap-4
          bg-slate-950
          px-5
          py-3
          text-white
          sm:px-7
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            text-xs
            font-medium
            text-slate-300
          "
        >
          <Sparkles
            aria-hidden="true"
            className="
              h-4
              w-4
              text-cyan-400
            "
          />

          Engineering Lab Demo
          {" • "}
          Simulated Agentic Logic
        </div>

        <button
          type="button"
          onClick={
            resetConversation
          }
          className="
            text-xs
            font-semibold
            text-slate-400
            transition-colors
            hover:text-white
          "
        >
          Reset
        </button>
      </div>

      <div
        className="
          grid
          lg:grid-cols-[0.55fr_0.45fr]
        "
      >
        <div
          className="
            border-b
            border-slate-200
            lg:border-b-0
            lg:border-r
          "
        >
          <div
            className="
              border-b
              border-slate-200
              bg-slate-50
              p-5
              sm:p-7
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-600
                  text-white
                "
              >
                <Bot
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <p
                  className="
                    font-bold
                    text-slate-950
                  "
                >
                  {
                    assistant.name
                  }
                </p>

                <div
                  className="
                    mt-1
                    flex
                    items-center
                    gap-2
                    text-xs
                    text-emerald-600
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-emerald-500
                    "
                  />

                  Guided shopping demo
                </div>
              </div>
            </div>
          </div>

          <div
            className="
              min-h-[440px]
              space-y-5
              bg-white
              p-5
              sm:p-7
            "
          >
            {messages.map(
              (
                message,
              ) => (
                <div
                  key={
                    message.id
                  }
                  className={`
                    flex
                    gap-3
                    ${
                      message.role ===
                      "user"
                        ? "justify-end"
                        : "justify-start"
                    }
                  `}
                >
                  {message.role ===
                    "assistant" && (
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <Bot
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[82%]
                      rounded-2xl
                      px-4
                      py-3
                      text-sm
                      leading-6
                      ${
                        message.role ===
                        "user"
                          ? "rounded-br-md bg-slate-950 text-white"
                          : "rounded-bl-md bg-slate-100 text-slate-700"
                      }
                    `}
                  >
                    {
                      message.text
                    }
                  </div>

                  {message.role ===
                    "user" && (
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-slate-100
                        text-slate-500
                      "
                    >
                      <User
                        aria-hidden="true"
                        className="h-4 w-4"
                      />
                    </div>
                  )}
                </div>
              ),
            )}
          </div>

          <div
            className="
              border-t
              border-slate-200
              bg-slate-50
              p-5
              sm:p-7
            "
          >
            <p
              className="
                mb-3
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-slate-400
              "
            >
              Try a prompt
            </p>

            <div
              className="
                mb-4
                flex
                flex-wrap
                gap-2
              "
            >
              {assistant.prompts.map(
                (
                  prompt,
                ) => (
                  <button
                    key={
                      prompt.label
                    }
                    type="button"
                    onClick={() =>
                      sendMessage(
                        prompt.message,
                      )
                    }
                    className="
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-slate-600
                      transition-colors
                      hover:border-blue-200
                      hover:text-blue-600
                    "
                  >
                    {
                      prompt.label
                    }
                  </button>
                ),
              )}
            </div>

            <div
              className="
                flex
                items-end
                gap-3
              "
            >
              <label
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  transition
                  focus-within:border-blue-400
                  focus-within:ring-4
                  focus-within:ring-blue-100
                "
              >
                <span className="sr-only">
                  Shopping request
                </span>

                <input
                  type="text"
                  value={
                    input
                  }
                  onChange={(
                    event,
                  ) =>
                    setInput(
                      event
                        .target
                        .value,
                    )
                  }
                  onKeyDown={(
                    event,
                  ) => {
                    if (
                      event.key ===
                      "Enter"
                    ) {
                      handleSubmit();
                    }
                  }}
                  placeholder={
                    assistant.placeholder
                  }
                  className="
                    h-13
                    min-w-0
                    flex-1
                    bg-transparent
                    text-sm
                    text-slate-950
                    outline-none
                    placeholder:text-slate-400
                  "
                />
              </label>

              <button
                type="button"
                onClick={
                  handleSubmit
                }
                aria-label="Send shopping request"
                className="
                  flex
                  h-13
                  w-13
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-600
                  text-white
                  transition-colors
                  hover:bg-blue-500
                "
              >
                <Send
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </button>
            </div>

            <p
              className="
                mt-4
                text-xs
                leading-5
                text-slate-400
              "
            >
              {
                assistant.disclaimer
              }
            </p>
          </div>
        </div>

        <aside
          className="
            bg-slate-50
            p-5
            sm:p-7
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-blue-600
                "
              >
                Agent Recommendations
              </p>

              <h3
                className="
                  mt-2
                  text-xl
                  font-bold
                  text-slate-950
                "
              >
                Recommended for you
              </h3>
            </div>

            {recommendations.length >
              0 && (
              <span
                className="
                  rounded-full
                  bg-blue-100
                  px-3
                  py-1.5
                  text-xs
                  font-bold
                  text-blue-700
                "
              >
                {
                  recommendations.length
                }{" "}
                matches
              </span>
            )}
          </div>

          {recommendations.length ===
          0 ? (
            <div
              className="
                mt-6
                flex
                min-h-[500px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-white
                p-8
                text-center
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-600
                "
              >
                <Sparkles
                  aria-hidden="true"
                  className="h-7 w-7"
                />
              </div>

              <h4
                className="
                  mt-5
                  font-bold
                  text-slate-950
                "
              >
                Start the conversation
              </h4>

              <p
                className="
                  mt-2
                  max-w-xs
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Describe what you&apos;re
                looking for and this
                demo will evaluate the
                simulated catalog.
              </p>
            </div>
          ) : (
            <div
              className="
                mt-6
                space-y-4
              "
            >
              {recommendations.map(
                (
                  product,
                  index,
                ) => {
                  const selected =
                    selectedProduct
                      ?.id ===
                    product.id;

                  return (
                    <article
                      key={
                        product.id
                      }
                      className={`
                        rounded-2xl
                        border
                        bg-white
                        p-4
                        transition-all
                        ${
                          selected
                            ? "border-blue-500 ring-2 ring-blue-100"
                            : "border-slate-200"
                        }
                      `}
                    >
                      <div
                        className="
                          grid
                          grid-cols-[90px_1fr]
                          gap-4
                        "
                      >
                        <ProductVisual
                          product={
                            product
                          }
                        />

                        <div
                          className="
                            min-w-0
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-2
                            "
                          >
                            <div>
                              <p
                                className="
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.12em]
                                  text-blue-600
                                "
                              >
                                Recommendation{" "}
                                {
                                  index +
                                  1
                                }
                              </p>

                              <h4
                                className="
                                  mt-1
                                  font-bold
                                  text-slate-950
                                "
                              >
                                {
                                  product.name
                                }
                              </h4>
                            </div>

                            <span
                              className="
                                shrink-0
                                text-sm
                                font-bold
                                text-slate-950
                              "
                            >
                              {formatCurrency(
                                product.price,
                              )}
                            </span>
                          </div>

                          <p
                            className="
                              mt-2
                              text-xs
                              leading-5
                              text-slate-500
                            "
                          >
                            {
                              product.description
                            }
                          </p>
                        </div>
                      </div>

                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-2
                        "
                      >
                        {product.attributes
                          .slice(
                            0,
                            3,
                          )
                          .map(
                            (
                              attribute,
                            ) => (
                              <span
                                key={
                                  attribute
                                }
                                className="
                                  rounded-full
                                  bg-slate-100
                                  px-2.5
                                  py-1
                                  text-[10px]
                                  font-semibold
                                  text-slate-600
                                "
                              >
                                {
                                  attribute
                                }
                              </span>
                            ),
                          )}
                      </div>

                      {pickupChecked && (
                        <div
                          className="
                            mt-4
                            flex
                            items-start
                            gap-3
                            rounded-xl
                            bg-emerald-50
                            p-3
                          "
                        >
                          <MapPin
                            aria-hidden="true"
                            className="
                              mt-0.5
                              h-4
                              w-4
                              shrink-0
                              text-emerald-600
                            "
                          />

                          <div>
                            <p
                              className="
                                text-xs
                                font-bold
                                text-emerald-800
                              "
                            >
                              Available at{" "}
                              {
                                product.pickup
                                  .store
                              }
                            </p>

                            <p
                              className="
                                mt-1
                                text-[11px]
                                text-emerald-700
                              "
                            >
                              {
                                product.pickup
                                  .distance
                              }{" "}
                              miles away •{" "}
                              {
                                product.pickup
                                  .quantity
                              }{" "}
                              in simulated inventory
                            </p>
                          </div>
                        </div>
                      )}

                      <div
                        className="
                          mt-4
                          flex
                          gap-2
                        "
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedProduct(
                              product,
                            )
                          }
                          className="
                            inline-flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-slate-950
                            px-4
                            py-3
                            text-xs
                            font-semibold
                            text-white
                            transition-colors
                            hover:bg-slate-800
                          "
                        >
                          <ShoppingBag
                            aria-hidden="true"
                            className="h-4 w-4"
                          />

                          View Product
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setPickupChecked(
                              true,
                            )
                          }
                          className="
                            inline-flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-4
                            py-3
                            text-xs
                            font-semibold
                            text-slate-700
                            hover:bg-slate-50
                          "
                        >
                          <MapPin
                            aria-hidden="true"
                            className="h-4 w-4"
                          />

                          Check Pickup
                        </button>
                      </div>
                    </article>
                  );
                },
              )}
            </div>
          )}

          {selectedProduct && (
            <div
              className="
                mt-5
                rounded-2xl
                border
                border-blue-200
                bg-blue-50
                p-5
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-blue-600
                  "
                />

                <div>
                  <p
                    className="
                      font-bold
                      text-slate-950
                    "
                  >
                    {
                      selectedProduct.name
                    }
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-slate-600
                    "
                  >
                    Product selection is
                    simulated. In a live
                    implementation this
                    action could open the
                    PDP, configure a
                    variant, or add the
                    product to cart.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div
            className="
              mt-5
              rounded-2xl
              bg-slate-950
              p-5
              text-white
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <PackageCheck
                aria-hidden="true"
                className="
                  h-5
                  w-5
                  text-cyan-400
                "
              />

              <p
                className="
                  text-sm
                  font-bold
                "
              >
                Commerce orchestration
              </p>
            </div>

            <p
              className="
                mt-3
                text-xs
                leading-6
                text-slate-400
              "
            >
              The experience combines
              catalog attributes,
              pricing, discovery logic,
              product recommendations,
              and simulated store
              inventory in one guided
              journey.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
