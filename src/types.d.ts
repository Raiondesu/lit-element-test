interface Todo {
  done: boolean;
  text: string;
  archived?: boolean;
}

declare module global {
  let render: typeof import('./dab-element.js')._render;
  let style: typeof import('./dab-element.js')._style;
  let event: typeof import('./dab-element.js')._event;
}

interface Window {
  render: typeof import('./dab-element.js')._render;
  style: typeof import('./dab-element.js')._style;
  e: typeof import('./dab-element.js')._event;
}
