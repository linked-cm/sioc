import { Shape } from '@_linked/core/shapes/Shape';
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { linkedShape } from '../package.js';
import { sioc } from '../ontologies/sioc.js';
@linkedShape
export class Usergroup extends Shape {
  static targetClass = sioc.Usergroup;

  @objectProperty({
    path: sioc.has_member,
    shape: ['lincd-sioc', 'UserAccount'],
  })
  get members(): any[] {
    return [];
  }

  @objectProperty({
    path: sioc.usergroup_of,
    shape: ['lincd-sioc', 'Space'],
  })
  get spaces(): any[] {
    return [];
  }
}
