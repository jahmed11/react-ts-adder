import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, expect, it } from "vitest";
import NumberList from "./NumberList";
import { NumberList as NumListType } from "types/numAdder";

describe("NumberList Component", () => {
  it("renders the list and total sum correctly", () => {

    const numList: NumListType = [
      { num: -10, id: 1 },
      { num: 20, id: 2 },
      { num: 30, id: 3 },
    ];

    const setNumList = vi.fn();

    render(<NumberList numList={numList} setNumList={setNumList} />);

    numList.forEach(({ num }) => {
      expect(screen.getByText(num)).toBeInTheDocument();
    });

    expect(screen.getByText("40")).toBeInTheDocument();
  });

  it("removes a number from the list when clicked on x", () => {
    const numList: NumListType = [
      { num: 10, id: 1 },
      { num: 20, id: 2 },
      { num: 30, id: 3 },
    ];

    const setNumList = vi.fn();
    const { rerender } = render(<NumberList numList={numList} setNumList={setNumList} />);
    expect(screen.getByText("60")).toBeInTheDocument();

    const removeButton = screen.getAllByText("x")[0];
    fireEvent.click(removeButton);

    const updateListFunction = setNumList.mock.calls[0][0];
    const updatedList = updateListFunction(numList);

    rerender(<NumberList numList={updatedList} setNumList={setNumList} />);

    expect(screen.getByText("50")).toBeInTheDocument();
  });
});
