import { ChangeEvent } from "react";
import styles from "./input.module.css";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
  type: "text" | "number";
}
const Input = ({ value, onChange, onKeyDown, placeholder, type }: InputProps) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles["input-field"]}
      placeholder={placeholder}
    />
  );
};

export default Input;
