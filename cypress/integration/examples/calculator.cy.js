describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("calculator should have working number buttons", () => {
    cy.get("#number1").click();
    cy.get(".display").should("contain", "1");
  });
  it("calculator should update the display of the running total", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get(".display").should("contain", "12");
  });

  it("calculator should do the arithmetical operations update the display with the result of the operation ", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2");
  });

  it("calculator can handle multiple operators which can be chained together", () => {
    cy.get("#number1").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "6");
  });

  it("calculator should have expected output for a range of numbers (positive)", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "46");
  });

  it("calculator should have expected output for a range of numbers (negative) (subtract)", () => {
    cy.get("#number1").click();
    cy.get("#number2").click();
    cy.get("#operator-subtract").click();
    cy.get("#number3").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-22");
  });

  it("calculator should have expected output for a range of numbers (decimal) (divide)", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "0.5");
  });

  it("calculator should have expected output for a range of numbers (large) (multiply)", () => {
    cy.get("#number1").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "20000000");
  });

  it("calculator should display ERROR if it divides by zero", () => {
    cy.get("#number1").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Error!");
  });
});
