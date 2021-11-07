import styles from "./FilterProducts.module.scss";
import { useState } from "react";
import Fuse from "fuse.js";
import { SearchInput } from "@components/home";
import { ProductCard } from "@components/product";

const FilterProducts = ({ products, categories }) => {
  const [activeCategory, setActiveCategory] = useState();
  const [query, setQuery] = useState();

  let activeProducts = products;

  if (activeCategory) {
    activeProducts = activeProducts.filter(({ categories }) => {
      const categoriesIds = categories.map(({ name }) => name);
      return categoriesIds.includes(activeCategory);
    });
  }

  const fuse = new Fuse(activeProducts, {
    keys: ["title", "categories.name"],
  });

  if (query) {
    const results = fuse.search(query);
    activeProducts = results.map(({ item }) => item);
  }

  function handleOnSearch(e) {
    const value = e.currentTarget.value;
    setQuery(value);
  }
  return (
    <>
      <div className={styles.filterProducts}>
        <div className={styles.filterProducts__empty}></div>
        <ul>
          <li>
            <button
              className={`btn btn--filter ${!activeCategory && "isActive"}`}
              onClick={() => setActiveCategory(undefined)}
            >
              View All
            </button>
          </li>
          {categories.map((category) => {
            const isActive = category.name === activeCategory;
            return (
              <li key={category.id}>
                <button
                  className={`btn btn--filter ${isActive ? "isActive" : ""}`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
        <div className={styles.filterProducts__search}>
          <SearchInput
            placeholder="Search product"
            onChange={handleOnSearch}
            type="search"
          />
        </div>
      </div>
      <div className="productsGrid">
        {activeProducts.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default FilterProducts;
