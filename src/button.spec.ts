import { mount } from "./twig.ts";
import button from "./button.twig";

describe("button", () => {
  it("exists", () => {
    mount(button, {
      text: "This is a button",
    });

    cy.get("button").screenshot();

    assert(cy.get("button").should("be.visible"));
    assert(cy.get("button").should("contain.text", "This is a button"));
  });
});
