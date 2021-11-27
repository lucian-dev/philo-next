import styles from "./ProductOptions.module.scss";

const ProductColors = ({ product, productColor, colorChange }) => {
  return (
    <div className={styles.productOptions__colors}>
      <span>Choose Color</span>
      <div className={styles.productOptions__colors_actions}>
        {product.colors.map((color, id) => {
          const colorActive = color.name === productColor;
          return (
            <button
              key={id}
              value={color.name}
              className={`btn btn--colors ${
                colorActive ? "colorSelected" : ""
              }`}
              style={{ backgroundColor: color.name }}
              onClick={colorChange}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColors;
