import { useState } from "react";
import NumberList from "./NumberList";
import AddNumber from "./AddNumber";
import { NumberList as NumListType } from "types/numAdder";
import styles from "./style.module.css";

const NumberAdder = () => {
  const [numList, setNumList] = useState<NumListType>([]);
  return (
    <div className={styles["add-num-container"]}>
      <AddNumber setNumList={setNumList} />
      <NumberList numList={numList} setNumList={setNumList} />
    </div>
  );
};

export default NumberAdder;
