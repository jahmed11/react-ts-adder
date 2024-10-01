import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest"; 
import Input from "./Input";



describe("Input Component", () => {
  it("should render with the correct placeholder and value", () => {
    render(<Input type="text" value="wash dishes" placeholder="Enter text" onChange={vi.fn()} />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("wash dishes");
  });

  it("should call onChange handler when text is entered", () => {
    const handleChange = vi.fn();
    const inputValue="new value" 
    render(<Input type="text" value="" placeholder="Enter text" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: inputValue} });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should call onKeyDown handler when a key is pressed", () => {
    const handleKeyDown = vi.fn();
    render(
      <Input type="text" value="" onChange={vi.fn()} placeholder="Enter text" onKeyDown={handleKeyDown} />
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter", charCode: 13 });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: "Enter" }));
  });
});
