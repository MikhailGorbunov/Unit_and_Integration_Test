describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });
  it("should have number buttons that update the display of the running total", () => {
    cy.get("#number2").click();
    cy.get("#number3").click();
    cy.get(".display").should("contain", "23");
  });

  it("should have arithmetical operators which update the display with the result of the operation ", () => {
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "4");
  });

  it("should have multiple operators which can be chained together", () => {
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number3").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "7");
  });

  it("should have expected output for a range of numbers (positive) (add)", () => {
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#operator_add").click();
    cy.get("#number2").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "44");
  });

  it("should have expected output for a range of numbers (negative) (subtract)", () => {
    cy.get("#number3").click();
    cy.get("#number3").click();
    cy.get("#operator-subtract").click();
    cy.get("#number4").click();
    cy.get("#number4").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "-11");
  });

  it("should have expected output for a range of numbers (decimal) (divide)", () => {
    cy.get("#number5").click();
    cy.get("#operator-divide").click();
    cy.get("#number2").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "2.5");
  });

  it("should have expected output for a range of numbers (large) (multiply)", () => {
    cy.get("#number2").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-multiply").click();
    cy.get("#number2").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "400000000");
  });

  it("should display ERROR if there is an attempt to divide by zero", () => {
    cy.get("#number5").click();
    cy.get("#operator-divide").click();
    cy.get("#number0").click();
    cy.get("#operator-equals").click();
    cy.get(".display").should("contain", "Infinity");
  });
});
