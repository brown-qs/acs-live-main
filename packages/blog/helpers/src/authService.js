export const getUser = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.localStorage.getItem('gatsbyUser'))
  }
}

export const isLoggined = () => {
  if (getUser()) {
    return true
  } else {
    return false
  }
}
