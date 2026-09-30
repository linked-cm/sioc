---
'@_linked/sioc': patch
---

Remove `custom-declarations`, an ambient `declare module '*.css' | '*.scss'` module that nothing in this package imports — sioc imports no CSS at all. The published package loses `lib/esm/custom-declarations.{d.ts,js,js.map}` and nothing else; the entry `index.d.ts` never referenced it. Because `exports` carries a `./*` wildcard, the subpath `@_linked/sioc/custom-declarations` resolved before and will not resolve now. The `.js` behind it was empty, so the only way a consumer could have relied on it is by importing it for the ambient CSS-module typings; declare those locally instead.
