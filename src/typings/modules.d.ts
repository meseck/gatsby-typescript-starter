interface CSSModule {
  [className: string]: string;
}

// type shims for (S)CSS modules

declare module '*.module.scss' {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module '*.module.css' {
  const cssModule: CSSModule;
  export = cssModule;
}

// type shims for SVG modules

declare module '*.svg' {
  const value: string;
  export = value;
}

// type shims for JPG modules

declare module '*.jpg' {
  const value: string;
  export = value;
}

