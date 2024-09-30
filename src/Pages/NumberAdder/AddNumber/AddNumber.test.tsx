import { render, screen, fireEvent } from "@testing-library/react";
import AddNumber from "./AddNumber";
import { vi, describe, beforeEach, expect, it } from "vitest"; 

describe("AddNumber Component", () => {
  let mockSetNumList: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    // Mock the setNumList function
    mockSetNumList = vi.fn();
  });

  it("should render the input and button", () => {
    render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    const buttonElement = screen.getByRole("button", { name: /add/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it("should allow typing valid numbers", () => {
    render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    fireEvent.change(inputElement, { target: { value: "123" } });

    expect((inputElement as HTMLInputElement).value).toBe("123");
  });

  it("should not allow invalid characters to be typed", () => {
    render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    fireEvent.change(inputElement, { target: { value: "abc" } });

    expect((inputElement as HTMLInputElement).value).toBe("0"); 
  });

  it("should trim leading zeros for valid numbers", () => {
    render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    fireEvent.change(inputElement, { target: { value: "0123" } });

    expect((inputElement as HTMLInputElement).value).toBe("123");
  });

  it("should add a number to the list on submit", () => {
    const { container } = render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    fireEvent.change(inputElement, { target: { value: "123" } });

    const formElement = container.querySelector('form[name="addNumber"]');
    fireEvent.submit(formElement as Element);

    expect(mockSetNumList).toHaveBeenCalledWith(expect.any(Function));
    expect(mockSetNumList).toHaveBeenCalledTimes(1);
  });

  it("should reset the input after adding a number", () => {
    const { container } =  render(<AddNumber setNumList={mockSetNumList} />);

    const inputElement = screen.getByPlaceholderText("enter number here");
    fireEvent.change(inputElement, { target: { value: "123" } });

    const formElement = container.querySelector('form[name="addNumber"]');
    fireEvent.submit(formElement as Element);

    expect((inputElement as HTMLInputElement).value).toBe("0");
  });
});
