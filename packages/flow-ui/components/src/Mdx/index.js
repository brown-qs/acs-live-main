import Loadable from '@loadable/component'

import { default as headings } from './Headings'
import { default as Figure } from './Figure'
import { default as Figcaption } from './Figcaption'

const Code = Loadable(() => import('./CodeBlock'))

export default {
  figure: Figure,
  figcaption: Figcaption,
  pre: props => props.children,
  code: Code,
  ...headings
}
