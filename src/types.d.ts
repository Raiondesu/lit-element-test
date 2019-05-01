interface Todo {
  done: boolean;
  text: string;
  archived?: boolean;
}

interface Window {
  render: typeof import('./dab-element.js')._render;
  style: typeof import('./dab-element.js')._style;
  e: typeof import('./dab-element.js')._event;
}
