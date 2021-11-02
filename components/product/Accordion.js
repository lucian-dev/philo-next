import styles from "./Accordion.module.scss";
import { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        onClick={() => setOpen(!isOpen)}
        className={[
          styles.accordion__title,
          `${isOpen ? `${styles.accordion__title_open}` : ""}`,
        ].join(" ")}
      >
        {title}
      </div>
      <div
        className={[
          styles.accordion__item,
          `${!isOpen ? `${styles.accordion__item_collapsed}` : ""}`,
        ].join(" ")}
      >
        <div className={styles.accordion__content}>{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
