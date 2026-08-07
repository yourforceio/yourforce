"use client";

import {
  Check,
  CheckCircle2,
  Clock3,
  Heart,
  MapPin,
  Navigation,
  PackageCheck,
  Search,
  ShoppingBag,
  Store,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { omnichannelFulfilment } from "@/data/omnichannel-fulfilment";

import type {
  FulfilmentAvailability,
  FulfilmentProduct,
  FulfilmentStore,
} from "@/types/omnichannel-fulfilment";

const formatCurrency = (
  value: number,
) =>
  new Intl.NumberFormat(
    "en-US",
    {
      style:
        "currency",

      currency:
        "USD",

      maximumFractionDigits:
        0,
    },
  ).format(value);

function getInventory(
  store: FulfilmentStore,
  productId: string,
) {
  return (
    store.inventory.find(
      (inventory) =>
        inventory.productId ===
        productId,
    )?.quantity ?? 0
  );
}

function getAvailability(
  quantity: number,
): FulfilmentAvailability {
  if (
    quantity <= 0
  ) {
    return "unavailable";
  }

  if (
    quantity <= 2
  ) {
    return "low-stock";
  }

  return "available";
}

function availabilityLabel(
  availability: FulfilmentAvailability,
) {
  switch (
    availability
  ) {
    case "available":
      return "Available for Pickup";

    case "low-stock":
      return "Low Stock";

    case "unavailable":
      return "Unavailable";

    default:
      return "";
  }
}

function availabilityClasses(
  availability: FulfilmentAvailability,
) {
  switch (
    availability
  ) {
    case "available":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";

    case "low-stock":
      return "bg-amber-50 text-amber-700 border-amber-200";

    case "unavailable":
      return "bg-slate-100 text-slate-500 border-slate-200";

    default:
      return "";
  }
}

function ProductVisual({
  product,
}: {
  product: FulfilmentProduct;
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
          -right-14
          -top-14
          h-40
          w-40
          rounded-full
          bg-white/30
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
            h-20
            w-20
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

export default function OmnichannelFulfilmentDemo() {
  const {
    experience,
    products,
    stores,
  } =
    omnichannelFulfilment;

  const [
    selectedProductId,
    setSelectedProductId,
  ] =
    useState(
      products[0]?.id ?? "",
    );

  const [
    locationQuery,
    setLocationQuery,
  ] =
    useState("");

  const [
    searchPerformed,
    setSearchPerformed,
  ] =
    useState(false);

  const [
    selectedStoreId,
    setSelectedStoreId,
  ] =
    useState<string | null>(
      null,
    );

  const [
    preferredStoreId,
    setPreferredStoreId,
  ] =
    useState<string | null>(
      null,
    );

  const [
    confirmed,
    setConfirmed,
  ] =
    useState(false);

  const selectedProduct =
    products.find(
      (product) =>
        product.id ===
        selectedProductId,
    ) ??
    products[0];

  const filteredStores =
    useMemo(() => {
      if (
        !searchPerformed
      ) {
        return stores;
      }

      const query =
        locationQuery
          .trim()
          .toLowerCase();

      if (
        !query
      ) {
        return stores;
      }

      const matches =
        stores.filter(
          (store) =>
            store.city
              .toLowerCase()
              .includes(
                query,
              ) ||
            store.state
              .toLowerCase()
              .includes(
                query,
              ) ||
            store.postalCode.includes(
              query,
            ) ||
            store.name
              .toLowerCase()
              .includes(
                query,
              ),
        );

      /*
       * Demo behaviour:
       * When the visitor enters a
       * location that does not match
       * our small simulated dataset,
       * show the complete nearby-store
       * dataset instead of an empty map.
       */
      return matches.length >
        0
        ? matches
        : stores;
    }, [
      locationQuery,
      searchPerformed,
      stores,
    ]);

  const selectedStore =
    stores.find(
      (store) =>
        store.id ===
        selectedStoreId,
    ) ?? null;

  const preferredStore =
    stores.find(
      (store) =>
        store.id ===
        preferredStoreId,
    ) ?? null;

  const selectProduct = (
    productId: string,
  ) => {
    setSelectedProductId(
      productId,
    );

    setSelectedStoreId(
      null,
    );

    setConfirmed(
      false,
    );
  };

  const chooseStore = (
    store: FulfilmentStore,
  ) => {
    if (
      !selectedProduct
    ) {
      return;
    }

    const quantity =
      getInventory(
        store,
        selectedProduct.id,
      );

    if (
      quantity <= 0
    ) {
      return;
    }

    setSelectedStoreId(
      store.id,
    );

    setConfirmed(
      false,
    );
  };

  if (
    !selectedProduct
  ) {
    return null;
  }

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
          <Navigation
            aria-hidden="true"
            className="
              h-4
              w-4
              text-cyan-400
            "
          />

          Engineering Lab Demo
          {" • "}
          Simulated Store Inventory
        </div>

        <span
          className="
            hidden
            text-xs
            text-slate-400
            sm:block
          "
        >
          BOPIS Experience
        </span>
      </div>

      <div
        className="
          border-b
          border-slate-200
          bg-slate-50
          px-5
          py-9
          sm:px-8
          sm:py-12
        "
      >
        <div
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-600
            "
          >
            Buy Online, Pick Up In Store
          </p>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              tracking-tight
              text-slate-950
              sm:text-4xl
            "
          >
            {
              experience.heading
            }
          </h3>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-600
              sm:text-base
            "
          >
            {
              experience.description
            }
          </p>
        </div>
      </div>

      <div
        className="
          grid
          lg:grid-cols-[0.38fr_0.62fr]
        "
      >
        <aside
          className="
            border-b
            border-slate-200
            bg-slate-50
            p-5
            sm:p-7
            lg:border-b-0
            lg:border-r
          "
        >
          <p
            className="
              text-xs
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-400
            "
          >
            Select Product
          </p>

          <div
            className="
              mt-4
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-1
            "
          >
            {products.map(
              (product) => {
                const active =
                  product.id ===
                  selectedProduct.id;

                return (
                  <button
                    key={
                      product.id
                    }
                    type="button"
                    onClick={() =>
                      selectProduct(
                        product.id,
                      )
                    }
                    className={`
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      p-3
                      text-left
                      transition-all
                      ${
                        active
                          ? "border-blue-500 bg-blue-50 ring-2 ring-blue-100"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }
                    `}
                  >
                    <div
                      className="
                        h-20
                        w-16
                        shrink-0
                      "
                    >
                      <ProductVisual
                        product={
                          product
                        }
                      />
                    </div>

                    <div
                      className="
                        min-w-0
                        flex-1
                      "
                    >
                      <p
                        className="
                          text-xs
                          font-medium
                          text-slate-400
                        "
                      >
                        {
                          product.category
                        }
                      </p>

                      <p
                        className="
                          mt-1
                          font-bold
                          text-slate-950
                        "
                      >
                        {
                          product.name
                        }
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-slate-600
                        "
                      >
                        {formatCurrency(
                          product.price,
                        )}
                      </p>
                    </div>

                    {active && (
                      <CheckCircle2
                        aria-hidden="true"
                        className="
                          h-5
                          w-5
                          shrink-0
                          text-blue-600
                        "
                      />
                    )}
                  </button>
                );
              },
            )}
          </div>

          {preferredStore && (
            <div
              className="
                mt-6
                rounded-2xl
                border
                border-blue-200
                bg-blue-50
                p-4
              "
            >
              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <Heart
                  aria-hidden="true"
                  className="
                    mt-0.5
                    h-4
                    w-4
                    shrink-0
                    fill-blue-600
                    text-blue-600
                  "
                />

                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-blue-600
                    "
                  >
                    Preferred Store
                  </p>

                  <p
                    className="
                      mt-1
                      font-bold
                      text-slate-950
                    "
                  >
                    {
                      preferredStore.name
                    }
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs
                      text-slate-600
                    "
                  >
                    {
                      preferredStore.city
                    }
                    ,{" "}
                    {
                      preferredStore.state
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </aside>

        <div>
          <div
            className="
              border-b
              border-slate-200
              p-5
              sm:p-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
              "
            >
              <label
                className="
                  flex
                  flex-1
                  items-center
                  gap-3
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
                <Search
                  aria-hidden="true"
                  className="
                    h-5
                    w-5
                    text-slate-400
                  "
                />

                <input
                  type="search"
                  value={
                    locationQuery
                  }
                  onChange={(
                    event,
                  ) =>
                    setLocationQuery(
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
                      setSearchPerformed(
                        true,
                      );
                    }
                  }}
                  placeholder={
                    experience.placeholder
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
                onClick={() =>
                  setSearchPerformed(
                    true,
                  )
                }
                className="
                  inline-flex
                  h-13
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-950
                  px-6
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-slate-800
                "
              >
                <MapPin
                  aria-hidden="true"
                  className="h-4 w-4"
                />

                Find Stores
              </button>
            </div>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                justify-between
                gap-3
              "
            >
              <p
                className="
                  text-sm
                  text-slate-500
                "
              >
                Availability for{" "}
                <span
                  className="
                    font-bold
                    text-slate-950
                  "
                >
                  {
                    selectedProduct.name
                  }
                </span>
              </p>

              <span
                className="
                  text-xs
                  text-slate-400
                "
              >
                {
                  filteredStores.length
                }{" "}
                nearby stores
              </span>
            </div>
          </div>

          <div
            className="
              grid
              gap-4
              p-5
              sm:p-7
            "
          >
            {filteredStores.map(
              (store) => {
                const quantity =
                  getInventory(
                    store,
                    selectedProduct.id,
                  );

                const availability =
                  getAvailability(
                    quantity,
                  );

                const selected =
                  selectedStoreId ===
                  store.id;

                const preferred =
                  preferredStoreId ===
                  store.id;

                return (
                  <article
                    key={
                      store.id
                    }
                    className={`
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      ${
                        selected
                          ? "border-blue-500 bg-blue-50/40 ring-2 ring-blue-100"
                          : "border-slate-200 bg-white"
                      }
                    `}
                  >
                    <div
                      className="
                        flex
                        flex-col
                        gap-5
                        xl:flex-row
                        xl:items-start
                        xl:justify-between
                      "
                    >
                      <div
                        className="
                          flex
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
                            rounded-xl
                            bg-slate-100
                            text-slate-600
                          "
                        >
                          <Store
                            aria-hidden="true"
                            className="h-5 w-5"
                          />
                        </div>

                        <div>
                          <div
                            className="
                              flex
                              flex-wrap
                              items-center
                              gap-2
                            "
                          >
                            <h4
                              className="
                                text-lg
                                font-bold
                                text-slate-950
                              "
                            >
                              {
                                store.name
                              }
                            </h4>

                            {preferred && (
                              <span
                                className="
                                  rounded-full
                                  bg-blue-100
                                  px-2.5
                                  py-1
                                  text-[10px]
                                  font-bold
                                  uppercase
                                  tracking-[0.1em]
                                  text-blue-700
                                "
                              >
                                Preferred
                              </span>
                            )}
                          </div>

                          <p
                            className="
                              mt-1
                              text-sm
                              text-slate-600
                            "
                          >
                            {
                              store.address
                            }
                            ,{" "}
                            {
                              store.city
                            }
                            ,{" "}
                            {
                              store.state
                            }{" "}
                            {
                              store.postalCode
                            }
                          </p>

                          <div
                            className="
                              mt-3
                              flex
                              flex-wrap
                              gap-x-5
                              gap-y-2
                              text-xs
                              text-slate-500
                            "
                          >
                            <span
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                              "
                            >
                              <Navigation
                                aria-hidden="true"
                                className="h-3.5 w-3.5"
                              />

                              {
                                store.distance
                              }{" "}
                              miles
                            </span>

                            <span
                              className="
                                inline-flex
                                items-center
                                gap-1.5
                              "
                            >
                              <Clock3
                                aria-hidden="true"
                                className="h-3.5 w-3.5"
                              />

                              {
                                store.hours
                              }
                            </span>
                          </div>

                          <div
                            className="
                              mt-3
                              flex
                              flex-wrap
                              gap-2
                            "
                          >
                            {store.services.map(
                              (
                                service,
                              ) => (
                                <span
                                  key={
                                    service
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
                                    service
                                  }
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      <div
                        className="
                          shrink-0
                          xl:text-right
                        "
                      >
                        <span
                          className={`
                            inline-flex
                            rounded-full
                            border
                            px-3
                            py-1.5
                            text-xs
                            font-bold
                            ${availabilityClasses(
                              availability,
                            )}
                          `}
                        >
                          {availabilityLabel(
                            availability,
                          )}
                        </span>

                        {quantity >
                          0 && (
                          <p
                            className="
                              mt-2
                              text-xs
                              text-slate-400
                            "
                          >
                            {
                              quantity
                            }{" "}
                            in simulated
                            inventory
                          </p>
                        )}
                      </div>
                    </div>

                    <div
                      className="
                        mt-5
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-slate-200
                        pt-4
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                      "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setPreferredStoreId(
                            preferred
                              ? null
                              : store.id,
                          )
                        }
                        className="
                          inline-flex
                          items-center
                          gap-2
                          text-sm
                          font-semibold
                          text-slate-600
                          hover:text-blue-600
                        "
                      >
                        <Heart
                          aria-hidden="true"
                          className={`
                            h-4
                            w-4
                            ${
                              preferred
                                ? "fill-blue-600 text-blue-600"
                                : ""
                            }
                          `}
                        />

                        {preferred
                          ? "Preferred Store"
                          : "Set as Preferred Store"}
                      </button>

                      <button
                        type="button"
                        disabled={
                          availability ===
                          "unavailable"
                        }
                        onClick={() =>
                          chooseStore(
                            store,
                          )
                        }
                        className={`
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          px-5
                          py-3
                          text-sm
                          font-semibold
                          transition-colors
                          ${
                            selected
                              ? "bg-emerald-600 text-white"
                              : "bg-blue-600 text-white hover:bg-blue-500"
                          }
                          disabled:cursor-not-allowed
                          disabled:bg-slate-200
                          disabled:text-slate-400
                        `}
                      >
                        {selected ? (
                          <>
                            <Check
                              aria-hidden="true"
                              className="h-4 w-4"
                            />

                            Selected
                          </>
                        ) : (
                          <>
                            <ShoppingBag
                              aria-hidden="true"
                              className="h-4 w-4"
                            />

                            Select Pickup
                          </>
                        )}
                      </button>
                    </div>
                  </article>
                );
              },
            )}
          </div>
        </div>
      </div>

      {selectedStore && (
        <div
          className="
            border-t
            border-slate-200
            bg-slate-950
            p-5
            text-white
            sm:p-7
          "
        >
          {!confirmed ? (
            <div
              className="
                flex
                flex-col
                gap-5
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div>
                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-cyan-300
                  "
                >
                  Pickup Selection
                </p>

                <h4
                  className="
                    mt-2
                    text-xl
                    font-bold
                  "
                >
                  {
                    selectedProduct.name
                  }{" "}
                  at{" "}
                  {
                    selectedStore.name
                  }
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-400
                  "
                >
                  Ready for simulated
                  same-day store pickup.
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setConfirmed(
                    true,
                  )
                }
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-blue-500
                "
              >
                <PackageCheck
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Confirm Pickup
              </button>
            </div>
          ) : (
            <div
              className="
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
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
                  rounded-full
                  bg-emerald-500/15
                  text-emerald-300
                "
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </div>

              <div>
                <p
                  className="
                    font-bold
                    text-white
                  "
                >
                  Pickup confirmed for
                  this demo.
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-slate-400
                  "
                >
                  No inventory has been
                  reserved and no order
                  has been created.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
