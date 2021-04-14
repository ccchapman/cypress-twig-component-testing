import Twig from "twig";

const ROOT_ELEMENT_ID = "__cy_root";

export const mount = (twig, data) => {
  const html = Twig.twig({
    data: twig,
  }).render(data);

  return cy.window({ log: false }).then((win) => {
    const document = cy.state("document");
    const el = document.querySelector(`#${ROOT_ELEMENT_ID}`);
    const component = document.createElement("div");
    component.innerHTML = html.trim();
    el.appendChild(component.firstChild);
  });
};
