import ListItem from "Components/ListItem/ListItem";
import { NumberList as NumListType } from "types/numAdder";
import styles from "./numberList.module.css";

interface ListProps {
  numList: NumListType;
  onClick: (id: number) => void;
}
const List = ({ onClick, numList }: ListProps) => {
  return (
    <div className={styles["list-container"]}>
      {numList?.map(({ num, id }) => (
        <ListItem key={id} id={id} num={num} onClick={onClick} />
      ))}
    </div>
  );
};

export default List;
