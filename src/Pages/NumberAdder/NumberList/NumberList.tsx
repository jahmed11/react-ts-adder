import { SetStateAction, Dispatch } from "react";
import Total from "./Total";
import List from "./List";
import { NumberList as NumListType } from "types/numAdder";
import styles from "./numberList.module.css";

interface NumberListProps {
  numList: NumListType;
  setNumList: Dispatch<SetStateAction<NumListType>>;
}

const NumberList = ({ numList, setNumList }: NumberListProps) => {
  const sum = numList.reduce((previousValue, currentValue) => previousValue + currentValue.num, 0);
  const onClick = (id: number) => {
    setNumList((prev) => prev.filter((el) => el.id !== id));
  };

  return (
    <div className={styles["list-wrapper"]}>
      <List numList={numList} onClick={onClick} />
      <Total sum={sum} />
    </div>
  );
};

export default NumberList;
