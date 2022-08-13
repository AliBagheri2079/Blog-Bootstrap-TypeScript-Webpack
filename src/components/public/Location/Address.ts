const template = document.createElement('template');
const styles = `
  <style>
    address {
      text-align: justify;
      padding-inline: 2rem;
      line-height: 2;
      word-spacing: 3px;
    }
  </style>
`;

template.innerHTML = `
  ${styles}
    <address>
      <slot name="address" />
    </address>
`;

class Address extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template?.content.cloneNode(true));
  }
}
export default Address;
