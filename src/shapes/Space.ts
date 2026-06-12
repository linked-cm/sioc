import { Shape } from '@_linked/core/shapes/Shape';
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { linkedShape } from '../package.js';
import { sioc } from '../ontologies/sioc.js';

@linkedShape
export class Space extends Shape {
  static targetClass = sioc.Space;

  @objectProperty({
    path: sioc.has_usergroup,
    shape: ['lincd-sioc', 'Usergroup'],
  })
  get usergroups(): any[] {
    return [];
  }
}
