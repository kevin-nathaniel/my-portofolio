/// <reference types="vite/client" />

import type { Directive } from 'vue'

declare module 'vue' {
  export interface GlobalDirectives {
    reveal: Directive<HTMLElement>
  }
}
