import React from 'react'
import { Flex } from 'theme-ui'

const styles = {
  wrapper: src => ({
    alignItems: `center`,
    flexDirection: [`column`, `row`],
    bg: `omegaDarker`,
    backgroundImage: src && [`url(${src})`],
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    borderRadius: `default`,
    width: `full`,
    height: `200px`,
    backgroundSize: `cover`,
    p: 4
  }),
  left: {
    flexBasis: `2/3`
  },
  right: {
    flexBasis: `1/3`,
    textAlign: `right`
  },
  heading: {
    color: `betaLight`,
    fontWeight: `normal`
  },
  subheading: {
    color: `omega`,
    mb: [3, 0]
  }
}

const AdHorizontal = props => {
  return <Flex sx={styles.wrapper(props && props.asset.fluid.src)}></Flex>
}

export default AdHorizontal
