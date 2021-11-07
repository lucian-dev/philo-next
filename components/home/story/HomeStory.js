import styles from "./HomeStory.module.scss";

const HomeStory = () => {
  return (
    <div className={styles.story}>
      <div className={styles.story__quote}>
        <q>
          Never doubt that a small group of thoughtful, committed, citizens can
          change the world. Indeed, it is the only thing that ever has.
        </q>
        <span>Margaret Mead</span>
      </div>
      <div className={styles.story__info}>
        <p>
          Put a bird on it austin occupy hoodie ethical, street art cardigan
          chambray dreamcatcher lomo food truck flannel umami +1 fashion axe.
        </p>
        <p>
          Mustache man bun banjo af heirloom. Retro palo santo pickled la croix
          selfies waistcoat actually edison bulb +1 mlkshk plaid cardigan
          shoreditch wolf paleo. Polaroid chillwave brooklyn iPhone.
        </p>
        <p>
          Edison bulb seitan offal, mlkshk celiac intelligentsia squid tote bag
          subway tile. Shoreditch readymade umami helvetica, ennui literally
          offal man bun hella snackwave.
        </p>
      </div>
    </div>
  );
};

export default HomeStory;
