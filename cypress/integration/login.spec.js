describe("login User", () => {
  it("open page", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Iniciar Sesion").click();
    cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]').click();
    cy.get("input[name='email']").type("jpramosmasgo@gmail.com");
    cy.get("input[name='password']").type("12345678");
  });
});
