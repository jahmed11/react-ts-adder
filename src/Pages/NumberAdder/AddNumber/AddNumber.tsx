import { SetStateAction, Dispatch, useState, FormEvent } from "react";
import { isValidNumber } from "../utils";
import AddNumberForm from "./AddNumberForm";
import { NumberList } from "types/numAdder";

interface AddNumberProps {
  setNumList: Dispatch<SetStateAction<NumberList>>;
}
const AddNumber = ({ setNumList }: AddNumberProps) => {
  const [addNum, setAddNum] = useState("0");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    if (!isValidNumber(inputValue) || inputValue.includes("--")) {
      return;
    }

    const negativeIndex = inputValue.indexOf("-");

    if (negativeIndex > 0) {
      inputValue = inputValue.slice(negativeIndex);
    }
    if (inputValue.length > 1 && inputValue[0] === "0") {
      inputValue = inputValue.slice(1);
    }

    setAddNum(inputValue);
  };

  const onAddHandler = () => {
    if (!Number(addNum)) {
      return;
    }
    setNumList((prev) => [...prev, { num: Number(addNum), id: Date.now() }]);

    setAddNum("0");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddHandler();
  };

  const addFormProps = {
    onSubmit,
    onChangeHandler,
    addNum,
  };

  return <AddNumberForm {...addFormProps} />;
};

export default AddNumber;
