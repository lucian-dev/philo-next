import styles from "@styles/Home.module.scss";
import { fetchQuery } from "@utils/fetcher";
import { useState } from "react";
import Fuse from "fuse.js";
import SearchInput from "@components/searchinput/SearchInput";
import ProductCard from "@components/product/ProductCard";

export default function Home({ tshirts, categories, quotes }) {
  const [activeCategory, setActiveCategory] = useState();
  const [query, setQuery] = useState();

  let activeProducts = tshirts;

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
    <div className={styles.home}>
      <div className={styles.home__hero}>
        <h1>A day without laughter is a day wasted</h1>
      </div>
      <div className={styles.home__filterProducts}>
        <div className={styles.home__filterProducts__empty}></div>
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
        <div className={styles.home__filterProducts__search}>
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
      <div className={styles.home__quote}>
        <q>{quotes.body}</q>
        <span>{quotes.author}</span>
      </div>
      <div className={styles.home__story}>
        <div className={styles.home__story_quote}>
          <q>
            Never doubt that a small group of thoughtful, committed, citizens
            can change the world. Indeed, it is the only thing that ever has.
          </q>
          <span>Margaret Mead</span>
        </div>
        <div className={styles.home__story_info}>
          <p>
            Put a bird on it austin occupy hoodie ethical, street art cardigan
            chambray dreamcatcher lomo food truck flannel umami +1 fashion axe.
          </p>
          <p>
            Mustache man bun banjo af heirloom. Retro palo santo pickled la
            croix selfies waistcoat actually edison bulb +1 mlkshk plaid
            cardigan shoreditch wolf paleo. Polaroid chillwave brooklyn iPhone.
          </p>
          <p>
            Edison bulb seitan offal, mlkshk celiac intelligentsia squid tote
            bag subway tile. Shoreditch readymade umami helvetica, ennui
            literally offal man bun hella snackwave.
          </p>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const tshirts = await fetchQuery("tshirts");
  const categories = await fetchQuery("categories");

  const resQuotes = await fetch(
    `https://stoicquotesapi.com/v1/api/quotes/random`
  );
  const quotes = await resQuotes.json();

  return {
    props: {
      tshirts,
      categories,
      quotes,
    },
  };
};
