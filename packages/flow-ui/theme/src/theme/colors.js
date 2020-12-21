import colors from './color-preset'

//Primary
const alpha = {
  alphaLighter: colors.yellow[100],
  alphaLight: colors.yellow[300],
  alpha: colors.yellow[500],
  alphaDark: colors.yellow[600],
  alphaDarker: colors.yellow[800]
}

// Secondary
const beta = {
  betaLighter: colors.gray[100],
  betaLight: colors.gray[300],
  beta: colors.gray[500],
  betaDark: colors.gray[600],
  betaDarker: colors.gray[800]
}

// Reserved
const gamma = {}

// Reserved
const psi = {}

// Neutral
const omega = {
  omegaLighter: colors.gray[200],
  omegaLight: colors.gray[300],
  omega: colors.gray[500],
  omegaDark: colors.gray[600],
  omegaDarker: colors.gray[800]
}

export default {
  text: colors.gray[600],
  article: colors.gray[700],
  heading: colors.gray[800],

  ...alpha,
  ...beta,
  ...gamma,
  ...psi,
  ...omega,

  successLight: colors.green[100],
  success: colors.green[500],
  errorLight: colors.red[100],
  error: colors.red[500],

  white: colors.white,
  background: `#f8f8f8`,
  contentBg: colors.white,
  headerBg: colors.white,
  footerBg: colors.white,

  mute: colors.gray[300],
  highlight: colors.yellow[200],

  modes: {
    dark: {
      // Reverse alpha
      alphaLighter: alpha.alphaDarker,
      alphaLight: alpha.alphaDark,
      alphaDark: alpha.alphaLight,
      alphaDarker: alpha.alphaLighter,

      // Reverse beta
      betaLighter: beta.betaDarker,
      betaLight: beta.betaDark,
      betaDark: beta.betaLight,
      betaDarker: beta.betaLighter,

      // Reverse omega
      omegaLighter: omega.omegaDarker,
      omegaLight: omega.omegaDark,
      omegaDark: omega.omegaLight,
      omegaDarker: omega.omegaLighter,

      text: colors.gray[400],
      article: colors.gray[300],
      heading: colors.gray[200],

      background: colors.gray[900],
      contentBg: colors.gray[800],
      headerBg: colors.gray[800],
      footerBg: colors.gray[800],

      mute: colors.gray[600]
    }
  }
}
