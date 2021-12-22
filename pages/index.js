import { fetchQuery } from '@utils/fetcher';
import { HomeHero, HomeQuote, HomeStory, FilterProducts } from '@components/home';
import styles from '@components/home/Home.module.scss';

export default function Home({ products, categories, quotes }) {
  return (
    <div className={styles.home}>
      <HomeHero />
      <FilterProducts products={products} categories={categories} />
      <HomeQuote quote={quotes} />
      <HomeStory />
    </div>
  );
}

export const getStaticProps = async () => {
  const products = await fetchQuery('tshirts');
  const categories = await fetchQuery('categories');

  const resQuotes = await fetch(`https://stoicquotesapi.com/v1/api/quotes/random`);
  const quotes = await resQuotes.json();

  return {
    props: {
      products,
      categories,
      quotes,
    },
  };
};
