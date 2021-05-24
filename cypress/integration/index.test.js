describe("Index", () => {
  it("adds a todo and toast when submitted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("#todos").contains("say hello");
    cy.get(".Toastify__toast--success").contains("New todo added: say hello");
  });

  it("adds a second todo and toast when submitted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("input").clear().type("go away");
    cy.get("form").submit();
    cy.get("#todos").contains("go away");
    cy.get(".Toastify__toast--success").contains("New todo added: go away");
  });

  it("deletes one todo with a toast when one is deleted", () => {
    cy.visit("http://localhost:3000");
    cy.get("input").type("say hello");
    cy.get("form").submit();
    cy.get("input").clear().type("go away");
    cy.get("form").submit();
    cy.get("#todos").find("button").eq(0).click();
    cy.get("#todos").contains("go away");
    cy.get(".Toastify__toast--error").contains("Todo deleted: say hello");
  });
});
