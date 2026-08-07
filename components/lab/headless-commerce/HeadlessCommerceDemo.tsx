"use client";

import {
  Check,
  ChevronLeft,
  Minus,
  PackageCheck,
  Plus,
  Search,
  Shirt,
  ShoppingBag,
  Sparkles,
  X,
} from "lucide-react";

import {
  useMemo,
  useState,
} from "react";

import { headlessCommerce } from "@/data/headless-commerce";

import type {
  CommerceCartItem,
  CommerceCategory,
  CommerceProduct,
  CommerceSort,
} from "@/types/headless-commerce";

const formatCurrency = (value: number) =>
  new Intl.NumberFormat(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    },
  ).format(value);

function ProductVisual({
  product,
  compact = false,
}: {
  product: CommerceProduct;
  compact?: boolean;
}) {
  return (
    <div
      className={`
        relative
        flex
        items-center
        justify-center
        overflow-hidden
        ${
          compact
            ? "h-20 w-16 rounded-xl"
            : "aspect-[4/5] w-full rounded-2xl"
        }
      `}
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
          h-32
          w-32
          rounded-full
          bg-white/25
          blur-2xl
        "
      />

      <div
        className="
          absolute
          -bottom-14
          -left-10
          h-32
          w-32
          rounded-full
          bg-white/20
          blur-2xl
        "
      />

      <Shirt
        aria-hidden="true"
        className={
          compact
            ? "relative h-7 w-7"
            : "relative h-20 w-20 sm:h-24 sm:w-24"
        }
        strokeWidth={1.2}
        style={{
          color:
            product.visual.accent,
        }}
      />
    </div>
  );
}

export default function HeadlessCommerceDemo() {
  const {
    categories,
    products,
    storefront,
  } = headlessCommerce;

  const [
    activeCategory,
    setActiveCategory,
  ] =
    useState<CommerceCategory>("All");

  const [
    searchQuery,
    setSearchQuery,
  ] =
    useState("");

  const [
    sort,
    setSort,
  ] =
    useState<CommerceSort>("featured");

  const [
    selectedProduct,
    setSelectedProduct,
  ] =
    useState<CommerceProduct | null>(null);

  const [
    selectedSize,
    setSelectedSize,
  ] =
    useState("");

  const [
    cart,
    setCart,
  ] =
    useState<CommerceCartItem[]>([]);

  const [
    cartOpen,
    setCartOpen,
  ] =
    useState(false);

  const visibleProducts =
    useMemo(() => {
      const normalizedQuery =
        searchQuery
          .trim()
          .toLowerCase();

      const filtered =
        products.filter(
          (product) => {
            const matchesCategory =
              activeCategory === "All" ||
              product.category ===
                activeCategory;

            const matchesSearch =
              !normalizedQuery ||
              product.name
                .toLowerCase()
                .includes(
                  normalizedQuery,
                ) ||
              product.category
                .toLowerCase()
                .includes(
                  normalizedQuery,
                );

            return (
              matchesCategory &&
              matchesSearch
            );
          },
        );

      if (
        sort === "price-low"
      ) {
        return [...filtered].sort(
          (a, b) =>
            a.price - b.price,
        );
      }

      if (
        sort === "price-high"
      ) {
        return [...filtered].sort(
          (a, b) =>
            b.price - a.price,
        );
      }

      return filtered;
    }, [
      activeCategory,
      products,
      searchQuery,
      sort,
    ]);

  const cartQuantity =
    cart.reduce(
      (
        total,
        item,
      ) =>
        total +
        item.quantity,
      0,
    );

  const subtotal =
    cart.reduce(
      (
        total,
        item,
      ) =>
        total +
        item.product.price *
          item.quantity,
      0,
    );

  const openProduct = (
    product: CommerceProduct,
  ) => {
    setSelectedProduct(
      product,
    );

    setSelectedSize(
      product.sizes[0] ?? "",
    );

    window.scrollTo({
      top:
        document
          .getElementById(
            "commerce-demo",
          )
          ?.offsetTop ?? 0,

      behavior:
        "smooth",
    });
  };

  const addToCart = (
    product: CommerceProduct,
    size: string,
  ) => {
    setCart(
      (current) => {
        const existing =
          current.find(
            (item) =>
              item.product.id ===
                product.id &&
              item.size ===
                size,
          );

        if (existing) {
          return current.map(
            (item) =>
              item.product.id ===
                  product.id &&
              item.size ===
                size
                ? {
                    ...item,
                    quantity:
                      item.quantity +
                      1,
                  }
                : item,
          );
        }

        return [
          ...current,
          {
            product,
            size,
            quantity: 1,
          },
        ];
      },
    );

    setCartOpen(true);
  };

  const updateQuantity = (
    productId: string,
    size: string,
    change: number,
  ) => {
    setCart(
      (current) =>
        current
          .map(
            (item) =>
              item.product.id ===
                  productId &&
              item.size === size
                ? {
                    ...item,
                    quantity:
                      item.quantity +
                      change,
                  }
                : item,
          )
          .filter(
            (item) =>
              item.quantity > 0,
          ),
    );
  };

  const removeItem = (
    productId: string,
    size: string,
  ) => {
    setCart(
      (current) =>
        current.filter(
          (item) =>
            !(
              item.product.id ===
                productId &&
              item.size ===
                size
            ),
        ),
    );
  };

  return (
    <div
      id="commerce-demo"
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
          border-b
          border-slate-200
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

          {storefront.announcement}
        </div>

        <div
          className="
            hidden
            items-center
            gap-2
            text-xs
            text-slate-400
            sm:flex
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
            "
          />

          Interactive
        </div>
      </div>

      <div
        className="
          border-b
          border-slate-200
          bg-white
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            gap-5
            px-5
            py-5
            sm:px-7
          "
        >
          <button
            type="button"
            onClick={() =>
              setSelectedProduct(
                null,
              )
            }
            className="
              text-lg
              font-black
              tracking-[-0.04em]
              text-slate-950
              transition-colors
              hover:text-blue-600
            "
          >
            {storefront.brand}
          </button>

          <div
            className="
              hidden
              items-center
              gap-7
              text-sm
              font-semibold
              text-slate-600
              md:flex
            "
          >
            <button
              type="button"
              onClick={() => {
                setActiveCategory(
                  "Women",
                );

                setSelectedProduct(
                  null,
                );
              }}
              className="hover:text-slate-950"
            >
              Women
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveCategory(
                  "Men",
                );

                setSelectedProduct(
                  null,
                );
              }}
              className="hover:text-slate-950"
            >
              Men
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveCategory(
                  "Accessories",
                );

                setSelectedProduct(
                  null,
                );
              }}
              className="hover:text-slate-950"
            >
              Accessories
            </button>
          </div>

          <button
            type="button"
            onClick={() =>
              setCartOpen(true)
            }
            aria-label={`Open cart with ${cartQuantity} items`}
            className="
              relative
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-slate-200
              px-4
              text-sm
              font-semibold
              text-slate-800
              transition-colors
              hover:border-slate-300
              hover:bg-slate-50
            "
          >
            <ShoppingBag
              aria-hidden="true"
              className="h-4 w-4"
            />

            <span
              className="
                hidden
                sm:inline
              "
            >
              Cart
            </span>

            <span
              className="
                flex
                h-5
                min-w-5
                items-center
                justify-center
                rounded-full
                bg-slate-950
                px-1
                text-[10px]
                text-white
              "
            >
              {cartQuantity}
            </span>
          </button>
        </div>
      </div>

      {selectedProduct ? (
        <div
          className="
            grid
            min-h-[650px]
            lg:grid-cols-2
          "
        >
          <div
            className="
              bg-slate-50
              p-5
              sm:p-8
              lg:p-10
            "
          >
            <button
              type="button"
              onClick={() =>
                setSelectedProduct(
                  null,
                )
              }
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-slate-600
                transition-colors
                hover:text-slate-950
              "
            >
              <ChevronLeft
                aria-hidden="true"
                className="h-4 w-4"
              />

              Back to products
            </button>

            <ProductVisual
              product={
                selectedProduct
              }
            />
          </div>

          <div
            className="
              flex
              items-center
              p-6
              sm:p-10
              lg:p-12
            "
          >
            <div className="w-full">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-600
                "
              >
                {
                  selectedProduct.category
                }
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
                  selectedProduct.name
                }
              </h3>

              <p
                className="
                  mt-4
                  text-xl
                  font-semibold
                  text-slate-950
                "
              >
                {formatCurrency(
                  selectedProduct.price,
                )}
              </p>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {
                  selectedProduct.description
                }
              </p>

              <div className="mt-9">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <p
                    className="
                      text-sm
                      font-bold
                      text-slate-950
                    "
                  >
                    Select size
                  </p>

                  <p
                    className="
                      text-xs
                      text-slate-500
                    "
                  >
                    Demo variants
                  </p>
                </div>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {selectedProduct.sizes.map(
                    (size) => {
                      const active =
                        selectedSize ===
                        size;

                      return (
                        <button
                          key={
                            size
                          }
                          type="button"
                          onClick={() =>
                            setSelectedSize(
                              size,
                            )
                          }
                          className={`
                            min-w-14
                            rounded-xl
                            border
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            ${
                              active
                                ? "border-slate-950 bg-slate-950 text-white"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                            }
                          `}
                        >
                          {
                            size
                          }
                        </button>
                      );
                    },
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  addToCart(
                    selectedProduct,
                    selectedSize,
                  )
                }
                disabled={
                  !selectedSize
                }
                className="
                  mt-9
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-blue-600
                  px-6
                  py-4
                  text-base
                  font-bold
                  text-white
                  transition-all
                  hover:bg-blue-500
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                <ShoppingBag
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                Add to Cart
              </button>

              <div
                className="
                  mt-6
                  grid
                  gap-3
                  border-t
                  border-slate-200
                  pt-6
                  sm:grid-cols-2
                "
              >
                {[
                  "Responsive PDP",
                  "Variant selection",
                  "Client cart state",
                  "API-ready data layer",
                ].map(
                  (item) => (
                    <div
                      key={
                        item
                      }
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-slate-600
                      "
                    >
                      <Check
                        aria-hidden="true"
                        className="
                          h-4
                          w-4
                          text-emerald-600
                        "
                      />

                      {
                        item
                      }
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="
              border-b
              border-slate-200
              bg-slate-50
              px-5
              py-10
              sm:px-8
              sm:py-14
              lg:px-10
            "
          >
            <div className="max-w-2xl">
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-blue-600
                "
              >
                New Collection
              </p>

              <h3
                className="
                  mt-3
                  text-3xl
                  font-bold
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {
                  storefront.heading
                }
              </h3>

              <p
                className="
                  mt-4
                  max-w-xl
                  text-base
                  leading-8
                  text-slate-600
                "
              >
                {
                  storefront.description
                }
              </p>
            </div>
          </div>

          <div
            className="
              border-b
              border-slate-200
              px-5
              py-5
              sm:px-7
            "
          >
            <div
              className="
                flex
                flex-col
                gap-4
                lg:flex-row
                lg:items-center
                lg:justify-between
              "
            >
              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >
                {categories.map(
                  (category) => (
                    <button
                      key={
                        category
                      }
                      type="button"
                      onClick={() =>
                        setActiveCategory(
                          category,
                        )
                      }
                      className={`
                        rounded-full
                        border
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        transition-all
                        ${
                          activeCategory ===
                          category
                            ? "border-slate-950 bg-slate-950 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                        }
                      `}
                    >
                      {
                        category
                      }
                    </button>
                  ),
                )}
              </div>

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                "
              >
                <label
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                  "
                >
                  <Search
                    aria-hidden="true"
                    className="
                      h-4
                      w-4
                      text-slate-400
                    "
                  />

                  <input
                    type="search"
                    value={
                      searchQuery
                    }
                    onChange={(
                      event,
                    ) =>
                      setSearchQuery(
                        event
                          .target
                          .value,
                      )
                    }
                    placeholder="Search products"
                    className="
                      h-11
                      min-w-0
                      bg-transparent
                      text-sm
                      text-slate-900
                      outline-none
                      placeholder:text-slate-400
                      sm:w-44
                    "
                  />
                </label>

                <select
                  value={
                    sort
                  }
                  onChange={(
                    event,
                  ) =>
                    setSort(
                      event
                        .target
                        .value as CommerceSort,
                    )
                  }
                  aria-label="Sort products"
                  className="
                    h-11
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
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div
            className="
              p-5
              sm:p-7
              lg:p-8
            "
          >
            {visibleProducts.length >
            0 ? (
              <div
                className="
                  grid
                  gap-x-5
                  gap-y-9
                  sm:grid-cols-2
                  lg:grid-cols-3
                "
              >
                {visibleProducts.map(
                  (product) => (
                    <article
                      key={
                        product.id
                      }
                      className="group"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          openProduct(
                            product,
                          )
                        }
                        className="
                          block
                          w-full
                          text-left
                        "
                      >
                        <div className="relative">
                          <ProductVisual
                            product={
                              product
                            }
                          />

                          {product.badge && (
                            <span
                              className="
                                absolute
                                left-4
                                top-4
                                rounded-full
                                bg-white/90
                                px-3
                                py-1.5
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.12em]
                                text-slate-900
                                shadow-sm
                                backdrop-blur
                              "
                            >
                              {
                                product.badge
                              }
                            </span>
                          )}

                          <div
                            className="
                              absolute
                              inset-x-4
                              bottom-4
                              translate-y-2
                              rounded-xl
                              bg-slate-950
                              px-4
                              py-3
                              text-center
                              text-sm
                              font-semibold
                              text-white
                              opacity-0
                              transition-all
                              duration-300
                              group-hover:translate-y-0
                              group-hover:opacity-100
                            "
                          >
                            View Product
                          </div>
                        </div>

                        <div className="mt-4">
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
                  min-h-72
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-dashed
                  border-slate-300
                  bg-slate-50
                  px-6
                  text-center
                "
              >
                <Search
                  aria-hidden="true"
                  className="
                    h-8
                    w-8
                    text-slate-300
                  "
                />

                <h4
                  className="
                    mt-4
                    font-bold
                    text-slate-950
                  "
                >
                  No products found
                </h4>

                <p
                  className="
                    mt-2
                    text-sm
                    text-slate-500
                  "
                >
                  Try a different
                  category or search.
                </p>
              </div>
            )}
          </div>
        </>
      )}

      {cartOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            justify-end
            bg-slate-950/50
            backdrop-blur-sm
          "
          role="dialog"
          aria-modal="true"
          aria-label="Shopping cart"
        >
          <button
            type="button"
            aria-label="Close cart overlay"
            onClick={() =>
              setCartOpen(false)
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
              flex
              h-full
              w-full
              max-w-md
              flex-col
              bg-white
              shadow-2xl
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-slate-200
                px-6
                py-5
              "
            >
              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-950
                  "
                >
                  Your Cart
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    text-slate-500
                  "
                >
                  {
                    cartQuantity
                  }{" "}
                  {cartQuantity ===
                  1
                    ? "item"
                    : "items"}
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  setCartOpen(false)
                }
                aria-label="Close cart"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-slate-200
                  text-slate-500
                  transition-colors
                  hover:bg-slate-50
                  hover:text-slate-950
                "
              >
                <X
                  aria-hidden="true"
                  className="h-5 w-5"
                />
              </button>
            </div>

            <div
              className="
                flex-1
                overflow-y-auto
                p-6
              "
            >
              {cart.length ===
              0 ? (
                <div
                  className="
                    flex
                    h-full
                    min-h-80
                    flex-col
                    items-center
                    justify-center
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
                      bg-slate-100
                    "
                  >
                    <ShoppingBag
                      aria-hidden="true"
                      className="
                        h-7
                        w-7
                        text-slate-400
                      "
                    />
                  </div>

                  <h4
                    className="
                      mt-5
                      font-bold
                      text-slate-950
                    "
                  >
                    Your cart is empty
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
                    Explore the demo
                    storefront and add a
                    product to continue.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setCartOpen(
                        false,
                      )
                    }
                    className="
                      mt-6
                      rounded-xl
                      bg-slate-950
                      px-5
                      py-3
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map(
                    (item) => (
                      <div
                        key={`${item.product.id}-${item.size}`}
                        className="
                          flex
                          gap-4
                          border-b
                          border-slate-200
                          pb-6
                        "
                      >
                        <ProductVisual
                          product={
                            item.product
                          }
                          compact
                        />

                        <div
                          className="
                            min-w-0
                            flex-1
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-3
                            "
                          >
                            <div>
                              <h4
                                className="
                                  font-bold
                                  text-slate-950
                                "
                              >
                                {
                                  item
                                    .product
                                    .name
                                }
                              </h4>

                              <p
                                className="
                                  mt-1
                                  text-xs
                                  text-slate-500
                                "
                              >
                                Size:{" "}
                                {
                                  item.size
                                }
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() =>
                                removeItem(
                                  item
                                    .product
                                    .id,
                                  item.size,
                                )
                              }
                              aria-label={`Remove ${item.product.name}`}
                              className="
                                text-slate-400
                                hover:text-slate-950
                              "
                            >
                              <X
                                aria-hidden="true"
                                className="h-4 w-4"
                              />
                            </button>
                          </div>

                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              justify-between
                              gap-4
                            "
                          >
                            <div
                              className="
                                flex
                                items-center
                                rounded-lg
                                border
                                border-slate-200
                              "
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item
                                      .product
                                      .id,
                                    item.size,
                                    -1,
                                  )
                                }
                                aria-label={`Decrease ${item.product.name} quantity`}
                                className="
                                  p-2
                                  text-slate-500
                                  hover:text-slate-950
                                "
                              >
                                <Minus
                                  aria-hidden="true"
                                  className="h-3 w-3"
                                />
                              </button>

                              <span
                                className="
                                  min-w-8
                                  text-center
                                  text-sm
                                  font-semibold
                                "
                              >
                                {
                                  item.quantity
                                }
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item
                                      .product
                                      .id,
                                    item.size,
                                    1,
                                  )
                                }
                                aria-label={`Increase ${item.product.name} quantity`}
                                className="
                                  p-2
                                  text-slate-500
                                  hover:text-slate-950
                                "
                              >
                                <Plus
                                  aria-hidden="true"
                                  className="h-3 w-3"
                                />
                              </button>
                            </div>

                            <p
                              className="
                                font-semibold
                                text-slate-950
                              "
                            >
                              {formatCurrency(
                                item
                                  .product
                                  .price *
                                  item.quantity,
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              )}
            </div>

            {cart.length >
              0 && (
              <div
                className="
                  border-t
                  border-slate-200
                  bg-slate-50
                  p-6
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
                  <span
                    className="
                      text-sm
                      font-semibold
                      text-slate-600
                    "
                  >
                    Subtotal
                  </span>

                  <span
                    className="
                      text-xl
                      font-black
                      text-slate-950
                    "
                  >
                    {formatCurrency(
                      subtotal,
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
                  Simulated checkout.
                  No payment or order
                  will be created.
                </p>

                <button
                  type="button"
                  className="
                    mt-5
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-6
                    py-4
                    font-bold
                    text-white
                    transition-colors
                    hover:bg-blue-500
                  "
                >
                  <PackageCheck
                    aria-hidden="true"
                    className="h-5 w-5"
                  />

                  Continue to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
