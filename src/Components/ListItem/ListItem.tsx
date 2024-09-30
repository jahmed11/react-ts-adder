import styles from "./listItem.module.css";
interface ListItemProps<T> {
  num: number;
  id: T;
  onClick: (id: T) => void;
}

const ListItem = <T,>({ num, id, onClick }: ListItemProps<T>) => {
  return (
    <div className={styles["item-container"]}>
      <span>{num}</span>
      <span className={styles["item__action"]} onClick={() => onClick(id)}>
        x
      </span>
    </div>
  );
};

export default ListItem;
