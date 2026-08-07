"use client";

import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { productDiscovery } from "@/data/product-discovery";

import type {
  DiscoveryCategory,
  DiscoveryPriceRange,
  DiscoveryProduct,
  DiscoverySort,
} from "@/types/product-discovery";

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

const priceRangeMatches = (
  product: DiscoveryProduct,
  range: DiscoveryPriceRange,
) => {
  switch (range) {
    case "under-75":
      return product.price < 75;

    case "75-125":
      return (
        product.price >= 75 &&
        product.price <= 125
      );

    case "125-plus":
      return product.price > 125;

    default:
      return true;
  }
};

function ProductVisual({
  product,
}: {
  product: DiscoveryProduct;
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
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-white/35
          blur-3xl
        "
      />

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-1/2
          bg-gradient-to-t
          from-black/10
          to-transparent
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
        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-[2rem]
            border
            border-white/40
            bg-white/25
            text-center
            text-xs
            font-black
            uppercase
            tracking-[0.18em]
            backdrop-blur-md
          "
          style={{
            color:
              product.visual.accent,
          }}
        >
          {product.category}
        </div>
      </div>

      {product.badge && (
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-slate-950
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-white
          "
        >
          {product.badge}
        </span>
      )}
    </div>
  );
}

export default function ProductDiscoveryDemo() {
  const {
    products,
    search,
  } =
    productDiscovery;

  const [
    query,
    setQuery,
  ] =
    useState("");

  const [
    categories,
    setCategories,
  ] =
    useState<
      DiscoveryCategory[]
    >([]);

  const [
    priceRanges,
    setPriceRanges,
  ] =
    useState<
      DiscoveryPriceRange[]
    >([]);

  const [
    selectedTags,
    setSelectedTags,
  ] =
    useState<string[]>([]);

  const [
    sort,
    setSort,
  ] =
    useState<DiscoverySort>(
      "relevance",
    );

  const [
    filtersOpen,
    setFiltersOpen,
  ] =
    useState(true);

  const [
    quickView,
    setQuickView,
  ] =
    useState<DiscoveryProduct | null>(
      null,
    );

  const normalizedQuery =
    query
      .trim()
      .toLowerCase();

  const availableTags =
    useMemo(
      () =>
        Array.from(
          new Set(
            products.flatMap(
              (product) =>
                product.tags,
            ),
          ),
        ).sort(),
      [products],
    );

  const results =
    useMemo(() => {
      const scored =
        products
          .map((product) => {
            let score = 0;

            if (
              normalizedQuery
            ) {
              const name =
                product.name.toLowerCase();

              const category =
                product.category.toLowerCase();

              const color =
                product.color.toLowerCase();

              const material =
                product.material.toLowerCase();

              const tags =
                product.tags.map(
                  (tag) =>
                    tag.toLowerCase(),
                );

              const keywords =
                product.keywords.map(
                  (keyword) =>
                    keyword.toLowerCase(),
                );

              if (
                name ===
                normalizedQuery
              ) {
                score += 100;
              }

              if (
                name.includes(
                  normalizedQuery,
                )
              ) {
                score += 50;
              }

              if (
                category.includes(
                  normalizedQuery,
                )
              ) {
                score += 30;
              }

              if (
                color.includes(
                  normalizedQuery,
                )
              ) {
                score += 20;
              }

              if (
                material.includes(
                  normalizedQuery,
                )
              ) {
                score += 20;
              }

              if (
                tags.some(
                  (tag) =>
                    tag.includes(
                      normalizedQuery,
                    ),
                )
              ) {
                score += 25;
              }

              if (
                keywords.some(
                  (keyword) =>
                    keyword.includes(
                      normalizedQuery,
                    ),
                )
              ) {
                score += 20;
              }

              if (score === 0) {
                return null;
              }
            }

            const matchesCategory =
              categories.length === 0 ||
              categories.includes(
                product.category,
              );

            if (
              !matchesCategory
            ) {
              return null;
            }

            const matchesPrice =
              priceRanges.length === 0 ||
              priceRanges.some(
                (range) =>
                  priceRangeMatches(
                    product,
                    range,
                  ),
              );

            if (
              !matchesPrice
            ) {
              return null;
            }

            const matchesTags =
              selectedTags.length ===
                0 ||
              selectedTags.every(
                (tag) =>
                  product.tags.includes(
                    tag,
                  ),
              );

            if (
              !matchesTags
            ) {
              return null;
            }

            return {
              product,
              score,
            };
          })
          .filter(
            (
              item,
            ): item is {
              product: DiscoveryProduct;
              score: number;
            } =>
              item !== null,
          );

      switch (sort) {
        case "price-low":
          return scored.sort(
            (a, b) =>
              a.product.price -
              b.product.price,
          );

        case "price-high":
          return scored.sort(
            (a, b) =>
              b.product.price -
              a.product.price,
          );

        case "name":
          return scored.sort(
            (a, b) =>
              a.product.name.localeCompare(
                b.product.name,
              ),
          );

        case "relevance":
        default:
          return scored.sort(
            (a, b) =>
              b.score -
              a.score,
          );
      }
    }, [
      categories,
      normalizedQuery,
      priceRanges,
      products,
      selectedTags,
      sort,
    ]);

  const instantSuggestions =
    useMemo(() => {
      if (
        normalizedQuery.length <
        1
      ) {
        return [];
      }

      return search.suggestions
        .filter(
          (suggestion) =>
            suggestion.label
              .toLowerCase()
              .includes(
                normalizedQuery,
              ) ||
            suggestion.query
              .toLowerCase()
              .includes(
                normalizedQuery,
              ),
        )
        .slice(
          0,
          4,
        );
    }, [
      normalizedQuery,
      search.suggestions,
    ]);

  const activeFilterCount =
    categories.length +
    priceRanges.length +
    selectedTags.length;

  const toggleCategory = (
    category: DiscoveryCategory,
  ) => {
    setCategories(
      (current) =>
        current.includes(
          category,
        )
          ? current.filter(
              (item) =>
                item !== category,
            )
          : [
              ...current,
              category,
            ],
    );
  };

  const togglePriceRange = (
    range: DiscoveryPriceRange,
  ) => {
    setPriceRanges(
      (current) =>
        current.includes(
          range,
        )
          ? current.filter(
              (item) =>
                item !== range,
            )
          : [
              ...current,
              range,
            ],
    );
  };

  const toggleTag = (
    tag: string,
  ) => {
    setSelectedTags(
      (current) =>
        current.includes(tag)
          ? current.filter(
              (item) =>
                item !== tag,
            )
          : [
              ...current,
              tag,
            ],
    );
  };

  const clearFilters = () => {
    setCategories([]);
    setPriceRanges([]);
    setSelectedTags([]);
  };

  const clearAll = () => {
    setQuery("");
    clearFilters();
    setSort(
      "relevance",
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
          Simulated Search Data
        </div>

        <span
          className="
            hidden
            text-xs
            text-slate-400
            sm:block
          "
        >
          Instant Discovery Experience
        </span>
      </div>

      <div
        className="
          border-b
          border-slate-200
          bg-slate-50
          px-5
          py-8
          sm:px-7
          sm:py-10
        "
      >
        <div
          className="
            mx-auto
            max-w-4xl
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
            Product Search
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
            Find what matters faster.
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
            Search across products,
            categories, attributes, and
            merchandising tags while
            refining results with live
            facets.
          </p>

          <div
            className="
              relative
              mx-auto
              mt-7
              max-w-2xl
            "
          >
            <Search
              aria-hidden="true"
              className="
                absolute
                left-5
                top-1/2
                h-5
                w-5
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="search"
              value={query}
              onChange={(
                event,
              ) =>
                setQuery(
                  event.target.value,
                )
              }
              placeholder={
                search.placeholder
              }
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                pl-13
                pr-12
                text-base
                text-slate-950
                shadow-sm
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-100
              "
            />

            {query && (
              <button
                type="button"
                onClick={() =>
                  setQuery("")
                }
                aria-label="Clear search"
                className="
                  absolute
                  right-4
                  top-1/2
                  flex
                  h-8
                  w-8
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  text-slate-400
                  hover:bg-slate-100
                  hover:text-slate-950
                "
              >
                <X
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </button>
            )}

            {instantSuggestions.length >
              0 && (
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-[calc(100%+8px)]
                  z-30
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  text-left
                  shadow-xl
                "
              >
                <p
                  className="
                    border-b
                    border-slate-100
                    px-4
                    py-3
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-slate-400
                  "
                >
                  Suggested searches
                </p>

                {instantSuggestions.map(
                  (suggestion) => (
                    <button
                      key={
                        suggestion.label
                      }
                      type="button"
                      onClick={() =>
                        setQuery(
                          suggestion.query,
                        )
                      }
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        border-b
                        border-slate-100
                        px-4
                        py-3
                        text-sm
                        font-medium
                        text-slate-700
                        last:border-b-0
                        hover:bg-slate-50
                      "
                    >
                      {
                        suggestion.label
                      }

                      <ChevronRight
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          text-slate-300
                        "
                      />
                    </button>
                  ),
                )}
              </div>
            )}
          </div>

          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className="
                mr-1
                text-xs
                font-semibold
                text-slate-400
              "
            >
              Popular:
            </span>

            {search.popularSearches.map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    if (
                      item ===
                      "Under $100"
                    ) {
                      setQuery("");
                      setPriceRanges([
                        "under-75",
                        "75-125",
                      ]);

                      return;
                    }

                    setQuery(
                      item
                        .replace(
                          "Everyday essentials",
                          "everyday",
                        )
                        .replace(
                          "Jackets",
                          "jacket",
                        )
                        .replace(
                          "Accessories",
                          "accessories",
                        ),
                    );
                  }}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-3.5
                    py-2
                    text-xs
                    font-semibold
                    text-slate-600
                    transition-colors
                    hover:border-blue-200
                    hover:text-blue-600
                  "
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </div>

      <div
        className="
          flex
          flex-col
          border-b
          border-slate-200
          px-5
          py-4
          sm:px-7
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <button
            type="button"
            onClick={() =>
              setFiltersOpen(
                (current) =>
                  !current,
              )
            }
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-4
              py-2.5
              text-sm
              font-semibold
              text-slate-700
              hover:bg-slate-50
            "
          >
            <SlidersHorizontal
              aria-hidden="true"
              className="h-4 w-4"
            />

            Filters

            {activeFilterCount >
              0 && (
              <span
                className="
                  flex
                  h-5
                  min-w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-600
                  px-1
                  text-[10px]
                  text-white
                "
              >
                {
                  activeFilterCount
                }
              </span>
            )}
          </button>

          <p
            className="
              text-sm
              text-slate-500
            "
          >
            <span
              className="
                font-bold
                text-slate-950
              "
            >
              {results.length}
            </span>{" "}
            results
          </p>
        </div>

        <div
          className="
            mt-4
            flex
            items-center
            gap-3
            lg:mt-0
          "
        >
          <label
            htmlFor="discovery-sort"
            className="
              text-sm
              font-medium
              text-slate-500
            "
          >
            Sort
          </label>

          <select
            id="discovery-sort"
            value={sort}
            onChange={(
              event,
            ) =>
              setSort(
                event.target
                  .value as DiscoverySort,
              )
            }
            className="
              h-10
              rounded-xl
              border
              border-slate-200
              bg-white
              px-4
              text-sm
              font-semibold
              text-slate-700
              outline-none
            "
          >
            <option value="relevance">
              Relevance
            </option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="name">
              Product Name
            </option>
          </select>
        </div>
      </div>

      {(query ||
        activeFilterCount >
          0) && (
        <div
          className="
            flex
            flex-wrap
            items-center
            gap-2
            border-b
            border-slate-200
            bg-slate-50
            px-5
            py-3
            sm:px-7
          "
        >
          {query && (
            <button
              type="button"
              onClick={() =>
                setQuery("")
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-blue-200
                bg-blue-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-blue-700
              "
            >
              Search: {query}

              <X
                aria-hidden="true"
                className="h-3 w-3"
              />
            </button>
          )}

          {categories.map(
            (category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  toggleCategory(
                    category,
                  )
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-600
                "
              >
                {category}

                <X
                  aria-hidden="true"
                  className="h-3 w-3"
                />
              </button>
            ),
          )}

          {selectedTags.map(
            (tag) => (
              <button
                key={tag}
                type="button"
                onClick={() =>
                  toggleTag(tag)
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-3
                  py-1.5
                  text-xs
                  font-semibold
                  text-slate-600
                "
              >
                {tag}

                <X
                  aria-hidden="true"
                  className="h-3 w-3"
                />
              </button>
            ),
          )}

          <button
            type="button"
            onClick={
              clearAll
            }
            className="
              ml-auto
              text-xs
              font-semibold
              text-slate-500
              hover:text-slate-950
            "
          >
            Clear all
          </button>
        </div>
      )}

      <div
        className="
          grid
          lg:grid-cols-[240px_1fr]
        "
      >
        {filtersOpen && (
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
            <div>
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <h4
                  className="
                    font-bold
                    text-slate-950
                  "
                >
                  Category
                </h4>

                {categories.length >
                  0 && (
                  <button
                    type="button"
                    onClick={() =>
                      setCategories(
                        [],
                      )
                    }
                    className="
                      text-xs
                      font-semibold
                      text-blue-600
                    "
                  >
                    Clear
                  </button>
                )}
              </div>

              <div
                className="
                  mt-4
                  space-y-3
                "
              >
                {(
                  [
                    "Men",
                    "Women",
                    "Accessories",
                  ] as DiscoveryCategory[]
                ).map(
                  (category) => {
                    const active =
                      categories.includes(
                        category,
                      );

                    const count =
                      products.filter(
                        (product) =>
                          product.category ===
                          category,
                      ).length;

                    return (
                      <button
                        key={
                          category
                        }
                        type="button"
                        onClick={() =>
                          toggleCategory(
                            category,
                          )
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-3
                          text-sm
                          text-slate-600
                        "
                      >
                        <span
                          className="
                            flex
                            items-center
                            gap-3
                          "
                        >
                          <span
                            className={`
                              flex
                              h-5
                              w-5
                              items-center
                              justify-center
                              rounded-md
                              border
                              ${
                                active
                                  ? "border-blue-600 bg-blue-600 text-white"
                                  : "border-slate-300 bg-white"
                              }
                            `}
                          >
                            {active && (
                              <Check
                                aria-hidden="true"
                                className="h-3 w-3"
                              />
                            )}
                          </span>

                          {
                            category
                          }
                        </span>

                        <span
                          className="
                            text-xs
                            text-slate-400
                          "
                        >
                          {count}
                        </span>
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            <div
              className="
                mt-7
                border-t
                border-slate-200
                pt-7
              "
            >
              <h4
                className="
                  font-bold
                  text-slate-950
                "
              >
                Price
              </h4>

              <div
                className="
                  mt-4
                  space-y-3
                "
              >
                {[
                  {
                    label:
                      "Under $75",
                    value:
                      "under-75" as const,
                  },
                  {
                    label:
                      "$75 – $125",
                    value:
                      "75-125" as const,
                  },
                  {
                    label:
                      "$125+",
                    value:
                      "125-plus" as const,
                  },
                ].map(
                  (range) => {
                    const active =
                      priceRanges.includes(
                        range.value,
                      );

                    return (
                      <button
                        key={
                          range.value
                        }
                        type="button"
                        onClick={() =>
                          togglePriceRange(
                            range.value,
                          )
                        }
                        className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          text-slate-600
                        "
                      >
                        <span
                          className={`
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-md
                            border
                            ${
                              active
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300 bg-white"
                            }
                          `}
                        >
                          {active && (
                            <Check
                              aria-hidden="true"
                              className="h-3 w-3"
                            />
                          )}
                        </span>

                        {
                          range.label
                        }
                      </button>
                    );
                  },
                )}
              </div>
            </div>

            <div
              className="
                mt-7
                border-t
                border-slate-200
                pt-7
              "
            >
              <h4
                className="
                  font-bold
                  text-slate-950
                "
              >
                Features
              </h4>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {availableTags.map(
                  (tag) => {
                    const active =
                      selectedTags.includes(
                        tag,
                      );

                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() =>
                          toggleTag(
                            tag,
                          )
                        }
                        className={`
                          rounded-full
                          border
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          transition
                          ${
                            active
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-200 bg-white text-slate-600 hover:border-blue-200"
                          }
                        `}
                      >
                        {tag}
                      </button>
                    );
                  },
                )}
              </div>
            </div>
          </aside>
        )}

        <div
          className="
            p-5
            sm:p-7
          "
        >
          {results.length >
          0 ? (
            <div
              className="
                grid
                gap-x-5
                gap-y-9
                sm:grid-cols-2
                xl:grid-cols-3
              "
            >
              {results.map(
                ({
                  product,
                  score,
                }) => (
                  <article
                    key={
                      product.id
                    }
                    className="group"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setQuickView(
                          product,
                        )
                      }
                      className="
                        block
                        w-full
                        text-left
                      "
                    >
                      <ProductVisual
                        product={
                          product
                        }
                      />

                      <div className="mt-4">
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          "
                        >
                          <p
                            className="
                              text-xs
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-slate-400
                            "
                          >
                            {
                              product.category
                            }
                          </p>

                          {normalizedQuery &&
                            score >
                              0 && (
                            <span
                              className="
                                rounded-full
                                bg-blue-50
                                px-2
                                py-1
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.08em]
                                text-blue-600
                              "
                            >
                              Relevant
                            </span>
                          )}
                        </div>

                        <div
                          className="
                            mt-1
                            flex
                            items-start
                            justify-between
                            gap-4
                          "
                        >
                          <h4
                            className="
                              font-bold
                              text-slate-950
                              transition-colors
                              group-hover:text-blue-600
                            "
                          >
                            {
                              product.name
                            }
                          </h4>

                          <span
                            className="
                              shrink-0
                              text-sm
                              font-semibold
                              text-slate-700
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
                            text-slate-500
                          "
                        >
                          {
                            product.color
                          }{" "}
                          •{" "}
                          {
                            product.material
                          }
                        </p>

                        <div
                          className="
                            mt-3
                            flex
                            flex-wrap
                            gap-1.5
                          "
                        >
                          {product.tags
                            .slice(
                              0,
                              3,
                            )
                            .map(
                              (tag) => (
                                <span
                                  key={
                                    tag
                                  }
                                  className="
                                    rounded-full
                                    bg-slate-100
                                    px-2
                                    py-1
                                    text-[10px]
                                    font-semibold
                                    text-slate-500
                                  "
                                >
                                  {
                                    tag
                                  }
                                </span>
                              ),
                            )}
                        </div>
                      </div>
                    </button>
                  </article>
                ),
              )}
            </div>
          ) : (
            <div
              className="
                flex
                min-h-[520px]
                flex-col
                items-center
                justify-center
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-slate-50
                px-6
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
                  bg-white
                  shadow-sm
                "
              >
                <Search
                  aria-hidden="true"
                  className="
                    h-7
                    w-7
                    text-slate-300
                  "
                />
              </div>

              <h4
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-slate-950
                "
              >
                No matching products
              </h4>

              <p
                className="
                  mt-2
                  max-w-sm
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                Try removing a
                filter or explore one
                of these suggested
                searches.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  justify-center
                  gap-2
                "
              >
                {search.suggestions
                  .slice(
                    0,
                    3,
                  )
                  .map(
                    (
                      suggestion,
                    ) => (
                      <button
                        key={
                          suggestion.label
                        }
                        type="button"
                        onClick={() => {
                          clearFilters();

                          setQuery(
                            suggestion.query,
                          );
                        }}
                        className="
                          rounded-full
                          border
                          border-slate-200
                          bg-white
                          px-4
                          py-2
                          text-xs
                          font-semibold
                          text-slate-600
                          hover:border-blue-200
                          hover:text-blue-600
                        "
                      >
                        {
                          suggestion.label
                        }
                      </button>
                    ),
                  )}
              </div>

              <button
                type="button"
                onClick={
                  clearAll
                }
                className="
                  mt-7
                  text-sm
                  font-semibold
                  text-blue-600
                "
              >
                Reset discovery
              </button>
            </div>
          )}
        </div>
      </div>

      {quickView && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-slate-950/55
            p-4
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label={`Quick view ${quickView.name}`}
        >
          <button
            type="button"
            aria-label="Close quick view overlay"
            onClick={() =>
              setQuickView(
                null,
              )
            }
            className="
              absolute
              inset-0
              cursor-default
            "
          />

          <div
            className="
              relative
              grid
              w-full
              max-w-4xl
              overflow-hidden
              rounded-[2rem]
              bg-white
              shadow-2xl
              md:grid-cols-2
            "
          >
            <div
              className="
                bg-slate-50
                p-6
                sm:p-8
              "
            >
              <ProductVisual
                product={
                  quickView
                }
              />
            </div>

            <div
              className="
                relative
                p-7
                sm:p-9
              "
            >
              <button
                type="button"
                onClick={() =>
                  setQuickView(
                    null,
                  )
                }
                aria-label="Close quick view"
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  text-slate-400
                  hover:bg-slate-50
                  hover:text-slate-950
                "
              >
                <X
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </button>

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-blue-600
                "
              >
                {
                  quickView.category
                }
              </p>

              <h3
                className="
                  mt-3
                  pr-12
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                "
              >
                {
                  quickView.name
                }
              </h3>

              <p
                className="
                  mt-3
                  text-xl
                  font-semibold
                  text-slate-950
                "
              >
                {formatCurrency(
                  quickView.price,
                )}
              </p>

              <p
                className="
                  mt-6
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {
                  quickView.description
                }
              </p>

              <div
                className="
                  mt-7
                  grid
                  gap-4
                  sm:grid-cols-2
                "
              >
                <div
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    Color
                  </p>

                  <p
                    className="
                      mt-1
                      font-semibold
                      text-slate-950
                    "
                  >
                    {
                      quickView.color
                    }
                  </p>
                </div>

                <div
                  className="
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    p-4
                  "
                >
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    Material
                  </p>

                  <p
                    className="
                      mt-1
                      font-semibold
                      text-slate-950
                    "
                  >
                    {
                      quickView.material
                    }
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {quickView.tags.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-blue-50
                        px-3
                        py-1.5
                        text-xs
                        font-semibold
                        text-blue-700
                      "
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <button
                type="button"
                className="
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-slate-950
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-slate-800
                "
              >
                View Product

                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4"
                />
              </button>

              <p
                className="
                  mt-3
                  text-center
                  text-xs
                  text-slate-400
                "
              >
                Simulated quick view
                for discovery
                demonstration.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
