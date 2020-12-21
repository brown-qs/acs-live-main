import { merge } from 'theme-ui'
import typography from './typography'
import borderWidths from './borderWidths'
import breakpoints from './breakpoints'
import space from './space'
import sizes from './sizes'
import radii from './radii'
import colors from './colors'
import prism from './prism'
import styles from './styles'
import buttons from './buttons'
import links from './links'
import text from './text'
import cards from './cards'
import lists from './lists'
import badges from './badges'
import messages from './messages'
import forms from './forms'
import layout from './layout'
import global from './global'

export default merge(typography, {
  // initialColorMode: `light`,
  colors,
  prism,
  breakpoints,
  sizes,
  space,
  radii,
  borderWidths,
  styles,
  buttons,
  links,
  text,
  cards,
  lists,
  badges,
  messages,
  forms,
  layout,
  global
})
