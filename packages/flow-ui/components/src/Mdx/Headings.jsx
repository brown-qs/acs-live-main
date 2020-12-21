import React from 'react'
import { css } from 'theme-ui'
import { Link } from 'theme-ui'
import { FaLink } from 'react-icons/fa'

const styles = {
  heading: {
    a: {
      visibility: `hidden`
    },
    ':hover a': {
      visibility: `visible`
    },
    pointerEvents: `painted`
  },
  link: {
    fontSize: 2,
    ml: -3,
    mr: -1,
    pr: 1
  }
}

const heading = Tag => props => (
  <Tag {...props} css={css(styles.heading)}>
    <Link href={`#${props.id}`} variant='normal' sx={styles.link}>
      <FaLink />
    </Link>
    {props.children}
  </Tag>
)

export default {
  h1: heading(`h1`),
  h2: heading(`h2`),
  h3: heading(`h3`),
  h4: heading(`h4`),
  h5: heading(`h5`),
  h6: heading(`h6`)
}
