import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest"; 
import ListItem from "./ListItem";

describe("ListItem Component", () => {
  const mockOnClick = vi.fn(); 

  it("should render the number and call onClick with the correct id when clicked", () => {
    const num = 5;
    const id = 1;

    render(<ListItem num={num} id={id} onClick={mockOnClick} />);

    expect(screen.getByText(num)).toBeInTheDocument();


    const actionElement = screen.getByText("x");
    fireEvent.click(actionElement);

    expect(mockOnClick).toHaveBeenCalledWith(id);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});