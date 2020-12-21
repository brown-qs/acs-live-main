import React from 'react'
import { Link as GLink } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Divider, Link } from 'theme-ui'
import Section from '@components/Section'

const styles = {
  imageWrapper: ({ width, height }) => ({
    width: `full`,
    maxWidth: width,
    maxHeight: height,
    borderRadius: `default`,
    overflow: `hidden`
  }),
  caption: {
    display: `block`,
    textAlign: `center`,
    fontSize: 0,
    mt: 1
  },
  image: {
    maxWidth: `100%`,
    height: `auto`,
    borderRadius: `0.5rem`
  }
}

const Poster = props => {
  const data = useStaticQuery(sponsorQuery2)
  const { banner } = data

  const { fluid } = (banner && banner.childImageSharp) || {}
  if (!fluid) return null

  const width = `400px`
  const height = `400px`

  return (
    <Section>
      <Box sx={styles.imageWrapper({ width, height })}>
        <Link href='/' target='_blank'>
          <img
            src={props.asset.fluid.src}
            style={styles.image}
            alt='poster ad'
          />
        </Link>
      </Box>
      <Link variant='mute' as={GLink} to='/contact' sx={styles.caption}>
        SPONSORLU İÇERİK
      </Link>
      <Divider />
    </Section>
  )
}

const sponsorQuery2 = graphql`
  query SponsorQuery2 {
    banner: file(absolutePath: { regex: "/sponsor.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fluid(maxWidth: 342, maxHeight: 260, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_noBase64
          width: presentationWidth
          height: presentationWidth
        }
      }
    }
  }
`
export default Poster
