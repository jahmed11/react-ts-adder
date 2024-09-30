import styles from "./numberList.module.css";

interface TotalProps {
  sum: number;
}
const Total = ({ sum }: TotalProps) => {
  return (
    <div className={styles["sum-container"]}>
      <span>Sum:</span>
      <span>{sum}</span>
    </div>
  );
};

export default Total;
