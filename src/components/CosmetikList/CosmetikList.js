
import CosmetikListItem from '../CosmetikListItem/CosmetikListItem';
import styles from './CosmetikList.module.scss';


export default function MenuList({ cosmetikItems, handleAddToOrder }) {
  const items = cosmetikItems.map(item =>
    <CosmetikListItem
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      cosmetikItem={item}
    />
  );
  return (
    <main className={styles.CosmetikList}>
      {items}
    </main>
  );
}