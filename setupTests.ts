import "@testing-library/jest-dom";
import { ThemeWrapper } from "./src/theme/theme";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";

const render = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  rtlRender(ui, { wrapper: ThemeWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
