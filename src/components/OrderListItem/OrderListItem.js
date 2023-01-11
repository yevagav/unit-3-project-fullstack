import styles from './OrderListItem.module.scss';

export default function OrderListItem({ order, isSelected, handleSelectOrder }) {
    return (
      <div className={`${styles.OrderListItem} ${isSelected ? styles.selected : ''}`} onClick={() => handleSelectOrder(order)}>
        <div>
          <div className={styles.order}>Order Id: <span className="smaller">{order.orderId} &nbsp; &nbsp; &nbsp;&nbsp; </span></div>
          <div className="smaller">{new Date(order.updatedAt).toLocaleDateString()}</div>
        </div>
        <div className="align-rt">
          <div className={styles.price}>${order.orderTotal.toFixed(2)}</div>
          <div className="smaller">{order.totalQty} Item{order.totalQty > 1 ? 's' : ''}</div>
        </div>
      </div>
    );
    }