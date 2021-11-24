import styles from "./PopupSize.module.scss";
import { useState } from "react";
import { CgArrowsShrinkH } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = () => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <button onClick={() => setPopup(true)} className="btn">
        Size guide
        <CgArrowsShrinkH />
      </button>
      {popup && (
        <div className={styles.popup_sizes}>
          <div className={styles.popup_sizes__modal}>
            <img src="/Product+Sheet.jpg" />
            <a
              onClick={() => setPopup(false)}
              className={styles.popup_sizes__close}
            >
              <AiOutlineCloseCircle />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
