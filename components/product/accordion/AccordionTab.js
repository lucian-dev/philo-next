import { useState } from 'react';
import styles from './Accordion.module.scss';

const AccordionTab = ({ title, content }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.accordionTab}>
      <div
        onClick={() => setOpen(!isOpen)}
        className={
          isOpen
            ? `${styles.accordionTab__title} ${styles.accordionTab__title_open}`
            : `${styles.accordionTab__title}`
        }
      >
        {title}
      </div>
      <div
        className={
          !isOpen
            ? `${styles.accordionTab__item} ${styles.accordionTab__item_collapsed}`
            : `${styles.accordionTab__item}`
        }
      >
        <div className={styles.accordionTab__content}>{content}</div>
      </div>
    </div>
  );
};

export default AccordionTab;
