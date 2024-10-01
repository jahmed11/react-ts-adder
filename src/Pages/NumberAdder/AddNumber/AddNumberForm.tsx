import { FormEvent, ChangeEvent } from "react";
import Input from "Components/Input/Input";
import Button from "Components/Button/Button";
import styles from "./addNumber.module.css";

interface AddNumberFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  addNum: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AddNumberForm = ({ onSubmit, addNum, onChangeHandler }: AddNumberFormProps) => {
  return (
    <form name="addNumber" onSubmit={onSubmit}>
      <div className={styles["num-form-container"]}>
        <Input
          type="text"
          placeholder="enter number here"
          value={addNum}
          onChange={onChangeHandler}
        />
        <Button type="submit" variant="primary">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddNumberForm;
