import styles from "./Accordion.module.scss";
import { useState } from "react";

const AccordionTab = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.accordionTab}>
      <div
        onClick={() => setOpen(!isOpen)}
        className={[
          styles.accordionTab__title,
          `${isOpen ? `${styles.accordionTab__title_open}` : ""}`,
        ].join(" ")}
      >
        {title}
      </div>
      <div
        className={[
          styles.accordionTab__item,
          `${!isOpen ? `${styles.accordionTab__item_collapsed}` : ""}`,
        ].join(" ")}
      >
        <div className={styles.accordionTab__content}>{content}</div>
      </div>
    </div>
  );
};

export default AccordionTab;
