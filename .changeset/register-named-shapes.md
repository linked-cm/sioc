---
'@_linked/sioc': patch
---

Fix shape references that could never resolve, and register what they name.

Space and Usergroup named their value shapes under the package's old name
(`['lincd-sioc', …]`), so `Space.usergroups`, `Usergroup.members` and
`Usergroup.spaces` pointed at `…/shape/lincd-sioc/…` IRIs that no shape has. They
now use this package's name.

Space, Usergroup and UserAccount also import each other for the side effect: naming
a shape does not register it, so loading one of them alone left the others
unregistered and a query traversing to them threw `Shape class not found`.
`UserAccount.accountOf` references schema's Person class directly.
