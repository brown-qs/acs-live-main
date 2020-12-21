import React, { useEffect } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactInfo from '@widgets/ContactInfo'
import Poster from '@widgets/Poster'
import AdHorizontal from '@widgets/AdHorizontal'
import ContactFormPost from '@widgets/ContactFormPost'
import { Card as CardComponent } from 'theme-ui'
import BlockContent from '@sanity/block-content-to-react'
import { isLoggined } from '@helpers-blog'

const Live = () => {
  useEffect(() => {
    if (!isLoggined()) {
      navigate('/login')
    }
  })
  const data = useStaticQuery(liveQuery)
  const live = data.allSanityLive.nodes[0]

  const serializer = {
    types: {
      block(props) {
        switch (props.node.style) {
          case 'h1':
            return <h1>{props.children}</h1>

          default:
            return <p>{props.children}</p>
        }
      }
    }
  }

  return (
    <>
      <Seo title='Live' />
      <Divider />
      <Stack>
        <PageTitle header={live.title} subheader={live.subTitle} />
      </Stack>
      <Stack>
        <Main>
          <Divider />
          <AdHorizontal asset={live.bannerLink.asset} />
          <Divider space={3} />
          <CardComponent variant='paper'>
            <iframe
              title='live video'
              width='100%'
              height='400'
              src={live.videoLink}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
            <Divider space={3} />
            <BlockContent blocks={live.description} serializers={serializer} />
          </CardComponent>
          <Divider space={3} />
          <ContactFormPost />
        </Main>
        <Sidebar>
          <Divider />
          <Poster asset={live.posterLink.asset} />
          <ContactInfo />
        </Sidebar>
      </Stack>
    </>
  )
}

const liveQuery = graphql`
  query liveQuery {
    allSanityLive {
      nodes {
        title
        subTitle
        videoLink
        posterLink {
          asset {
            fluid {
              src
            }
          }
        }
        bannerLink {
          asset {
            fluid {
              src
            }
          }
        }
        description {
          _key
          _type
          style
          list
          children {
            _key
            _type
            text
          }
        }
      }
    }
  }
`

export default Live
