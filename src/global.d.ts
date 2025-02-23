// global.d.ts

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  import { SVGProps, FC } from "react";

  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}

// declare module '*.scss' {
//   const content: Record<string, string>
//   export default content
// }

// declare module '*.svg' {
//   import type { HTMLProps, FC } from 'react'

//   export const ReactComponent: FC<HTMLProps<SVGElement>>
// }
