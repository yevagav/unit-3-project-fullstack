import styles from './CosmetikListItem.module.scss';

export default function CosmetikListItem({ cosmetikItem, handleAddToOrder }) {
    return (
      <div className={styles.CosmetikListItem}>
        <img className={styles.img}src={cosmetikItem.img}/>
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