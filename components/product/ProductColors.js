import styles from "./ProductColors.module.scss";

const ProductColors = ({ product, productColor, colorChange }) => {
  return (
    <div className={styles.colors}>
      <span>Choose Color</span>
      <div className={styles.colors__actions}>
        {product.colors.map((color, id) => {
          const colorActive = color.name === productColor;
          return (
            <button
              key={id}
              value={color.name}
              className={`btn btn--colors btn--colors_${color.name.toLowerCase()} ${
                colorActive ? "colorSelected" : ""
              }`}
              onClick={colorChange}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColors;
