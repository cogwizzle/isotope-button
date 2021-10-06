import { html, css, LitElement } from 'lit';

export class IsotopeButton extends LitElement {
  static styles = css`
    button {
      display: block;
      color: var(--isotope-button-text-color, #000);
      outline: none;
      box-shadow: 2px 2px 2px grey;
      border-radius: 5px;
      border: none;
    }

    button:active:hover {
      box-shadow: 1px 1px 1px grey;
    }
  `;

  render() {
    return html`
      <button title="isotope-button">
        <slot></slot>
      </button>
    `;
  }
}
