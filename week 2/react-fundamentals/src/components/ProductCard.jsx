import styles from '../styles/ProductCard.module.css';

function ProductCard({ name, price, description, image, category }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
