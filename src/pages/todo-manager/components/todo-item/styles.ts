import { css } from '../../../../../node_modules/lit-element/lit-element.js';

export default css`
  :host {
    width: 100%;
    display: flex;
  }

  :host([archived]) {
    color: grey;
  }

  :host .actions {
    align-self: flex-end;
  }

  :host .todo {
    flex-grow: 1;
  }

  :host .text {
    user-select: none;
  }
`;
