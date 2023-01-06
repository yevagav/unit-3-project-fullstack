import styles from './CosmetikListItem.module.scss';

export default function MenuListItem({ cosmetikItem, handleAddToOrder }) {
    return (
      <div className={styles.CosmetikListItem}>
        <div className={styles.img}>{cosmetikItem.img}</div>
        <div className={styles.name}>{cosmetikItem.name}</div>
        <div className={styles.buy}>
          <span>${cosmetikItem.price.toFixed(2)}</span>
          <button className="btn-sm" onClick={() => handleAddToOrder(cosmetikItem._id)}>
            ADD
          </button>
        </div>
      </div>
    );
  }