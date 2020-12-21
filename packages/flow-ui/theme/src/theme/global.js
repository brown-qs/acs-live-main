export default t => ({
  html: {
    fontSize: `85%`,
    [`@media screen and (min-width: ${t.breakpoints[0]})`]: {
      fontSize: `90%`
    },
    [`@media screen and (min-width: ${t.breakpoints[1]})`]: {
      fontSize: `95%`
    },
    [`@media screen and (min-width: ${t.breakpoints[2]})`]: {
      fontSize: `100%`
    }
  },
  '::selection': {
    color: t.colors.white,
    background: t.colors.omegaDark
  }
})
