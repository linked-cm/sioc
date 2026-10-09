---
'@_linked/sioc': minor
---

Depend on `@_linked/react@^2.0.0` (was `^1.0`), `@_linked/schema@^1.5.0` (was `^1.0`, the first schema release on `@_linked/react` 2) and `@_linked/core@^2.27.0` (was `^2.22.8`, the core peer range `@_linked/react` 2 requires).

An app on `@_linked/react` 2 no longer installs a second copy of `@_linked/react` 1 through this package or through schema. The only thing used from it is `createLinkedComponentFn`, which 2.0 did not change.

Minor rather than major: `@_linked/react` is a regular dependency here, not a peer, so no consumer has to change anything to install this release; and a major would force auth and every app on `@_linked/sioc@^1` to change its range just to pick it up.
