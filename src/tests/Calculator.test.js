import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should make addition (ie 1 + 4 = 5)", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const buttonAdd = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonAdd);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should make subtraction (ie 7 - 4 = 3)", () => {
    const button7 = container.getByTestId("number7");
    const button4 = container.getByTestId("number4");
    const buttonSubtract = container.getByTestId("operator-subtract");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should make multiplication (ie 3 * 5 = 15)", () => {
    const button3 = container.getByTestId("number3");
    const button5 = container.getByTestId("number5");
    const buttonMultiply = container.getByTestId("operator-multiply");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should make division (ie 21 / 7 = 3", () => {
    const button2 = container.getByTestId("number2");
    const button1 = container.getByTestId("number1");
    const button7 = container.getByTestId("number7");
    const buttonDivide = container.getByTestId("operator-divide");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should concatenate multiple number button clicks", () => {
    const button1 = container.getByTestId("number1");
    const button2 = container.getByTestId("number2");
    const button3 = container.getByTestId("number3");
    const button4 = container.getByTestId("number4");
    const button5 = container.getByTestId("number5");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(button2);
    fireEvent.click(button3);
    fireEvent.click(button4);
    fireEvent.click(button5);
    expect(runningTotal.textContent).toEqual("12345");
  });

  it("should chain multiple operations together (ie 4 * 4 - 2 = 14)", () => {
    const button2 = container.getByTestId("number2");
    const button4 = container.getByTestId("number4");
    const buttonMultiply = container.getByTestId("operator-multiply");
    const buttonSubtract = container.getByTestId("operator-subtract");
    const runningTotal = container.getByTestId("running-total");
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(button4);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button4);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button2);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("14");
  });

  it("should clear the running total without affecting the calculation", () => {
    const button8 = container.getByTestId("number8");
    const button2 = container.getByTestId("number2");
    const buttonAdd = container.getByTestId("operator-add");
    const runningTotal = container.getByTestId("running-total");
    const buttonClear = container.getByTestId("clear");
    const buttonEquals = container.getByTestId("operator-equals");
    fireEvent.click(button8);
    fireEvent.click(buttonAdd);
    fireEvent.click(button8);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonClear);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("16");
  });
});
