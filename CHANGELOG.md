# @\_linked/sioc

## 1.1.0

### Minor Changes

- [`fe303c7`](https://github.com/linked-cm/sioc/commit/fe303c79e293e630ef788e99f86552f709bb2553) - **Renamed from `lincd-sioc` and extracted from the `lincd.org` umbrella
  to its own workspace + git repo.** This is the first release under the
  `@_linked/sioc` name.

  ### Migration from `lincd-sioc`

  Consumers importing `lincd-sioc` should change the import name only —
  the JS API surface is unchanged from `lincd-sioc@1.0.3`:

  ```diff
  - import { UserAccount } from 'lincd-sioc/shapes/UserAccount';
  + import { UserAccount } from '@_linked/sioc/shapes/UserAccount';
  ```

  ```diff
    "dependencies": {
  -   "lincd-sioc": "~1.0"
  +   "@_linked/sioc": "^1.1"
    }
  ```

  Shape registration strings that named the legacy package also need updating:

  ```diff
  - shape: ['lincd-sioc', 'UserAccount']
  + shape: ['@_linked/sioc', 'UserAccount']
  ```

  (This matters if you persist the registration to a SHACL dataset; the
  backing string is what the framework uses to dispatch.)

  ### What's in this release

  All seven existing sioc shapes:

  - `UserAccount` (sioc:UserAccount)
  - `Site` (sioc:Site)
  - `Space` (sioc:Space)
  - `Container` (sioc:Container)
  - `Item` (sioc:Item)
  - `Role` (sioc:Role)
  - `Usergroup` (sioc:Usergroup)

  Plus the matching `sioc` ontology namespace export, `UserAvatar` +
  `UserName` React components, and the `lincd-types-from-sioc-types.json`
  data fixture.

  ### Internal changes vs `lincd-sioc@1.0.3`

  - **`UserAccount` extends `Shape` directly** (was `Resource` from
    `lincd-rdfs`). `Resource` just extended `Shape` plus a `type` getter
    that returns `null`; the flatter chain is functionally equivalent.
  - **`getAccountOf(_person)` parameter retyped from `foaf:Person` to
    `unknown`**. The method body already threw "not migrated yet" —
    retype reflects the actual usable signature.
  - **Dropped deps: `foaf`, `lincd-rdfs`** (both became unreachable after
    the two changes above).
  - **Modern build pipeline**: dual ESM/CJS output via `rimraf` +
    `tsconfig-to-dual-package`. Replaces the legacy `lincd build` script.
  - **`development` conditional export** added to `package.json` —
    Vite-based consumers resolve straight to `src/` for HMR.
  - **Changesets + CI workflows** added (matching `@_linked/dcat`).

  ### Compatibility

  - API surface unchanged from `lincd-sioc@1.0.3` for all current callers.
  - `getAccountOf<T>(_person)` parameter is now `unknown` instead of
    `foaf:Person`. Calls that pass a foaf Person still compile (unknown
    accepts anything); calls relied on the `foaf:Person` type for
    narrowing would lose that — but since the body unconditionally throws,
    no real call site exercises this.

  Context: see create-now plan-011 report (docs/reports/009-legacy-lincd-eradication.md).

## 1.0.4

### Patch Changes

- Renamed from `lincd-sioc` to `@_linked/sioc` and migrated out of the
  lincd.org umbrella to its own package + git repo. Internal source
  unchanged (already used `@_linked/core` and `@_linked/schema`); only
  package name + tooling structure updated. CN + `@_linked/auth`
  consumers updated to import from `@_linked/sioc/...`. See create-now
  plan-011 §"Phase 4 — Rename lincd-sioc → @\_linked/sioc" for
  motivation and full migration breakdown.
