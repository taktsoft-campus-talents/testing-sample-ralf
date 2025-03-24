import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { MyButton } from "./MyButton";

describe("MyButton", () => {
  const { getByTestId } = render(<MyButton />);

  it("should render", () => {
    const counterValue = getByTestId("counter-value");
    expect(counterValue).toBeInTheDocument();
  });

  it("should increment and decrement the counter", async () => {
    const counterValue = getByTestId("counter-value");
    const incrementButton = getByTestId("btn-increment");
    const decrementButton = getByTestId("btn-decrement");
    expect(counterValue).toHaveTextContent("0");
    await incrementButton.click();
    expect(counterValue).toHaveTextContent("1");
    await decrementButton.click();
    expect(counterValue).toHaveTextContent("0");
  });
});
