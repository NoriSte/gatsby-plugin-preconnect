/// <reference types="Cypress" />

context('Preconnect', () => {
  it('A preconnect link should be added for every specified domain', () => {
    cy.visit('http://localhost:9000')
    cy.get("link").then($el => {
      $el.each((i, el) => {
        const href = el.getAttribute("href");
        if(el.nodeName.toLowerCase() === "link" && (href.includes("https://foo.com") || href.includes("https://bar.com"))) {
          expect(el.getAttribute("rel")).to.equal("preconnect");
        }
      });
    })
  })
})
