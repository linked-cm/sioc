# @_linked/sioc

SIOC ([Semantically-Interlinked Online Communities](http://rdfs.org/sioc/spec/))
vocabulary as `@linkedShape` classes.

## Shapes

- `UserAccount` — `sioc:UserAccount`
- `Site` — `sioc:Site`
- `Space` — `sioc:Space`
- `Container` — `sioc:Container`
- `Item` — `sioc:Item`
- `Role` — `sioc:Role`
- `Usergroup` — `sioc:Usergroup`

## Usage

```ts
import { UserAccount } from '@_linked/sioc/shapes/UserAccount';

const account = await UserAccount.select().one();
console.log(account.accountOf?.givenName);
```

## History

Renamed from `lincd-sioc` to `@_linked/sioc` and migrated out of the
[lincd.org](https://github.com/lincd-org) umbrella in
[create-now plan-011](https://github.com/Semantu/create-now/blob/main/docs/reports/)
(2026-06-12). Internal source is unchanged — only the package name and
publishing infrastructure were updated to match the modern `@_linked/*`
convention (changesets, dual-package ESM+CJS build, `development`
conditional export for Vite HMR).
