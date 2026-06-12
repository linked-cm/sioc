# @_linked/sioc

## 1.0.4

### Patch Changes

- Renamed from `lincd-sioc` to `@_linked/sioc` and migrated out of the
  lincd.org umbrella to its own package + git repo. Internal source
  unchanged (already used `@_linked/core` and `@_linked/schema`); only
  package name + tooling structure updated. CN + `@_linked/auth`
  consumers updated to import from `@_linked/sioc/...`. See create-now
  plan-011 §"Phase 4 — Rename lincd-sioc → @_linked/sioc" for
  motivation and full migration breakdown.
