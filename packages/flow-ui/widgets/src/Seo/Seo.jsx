import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from '@helpers/useSiteMetadata'

const Seo = ({
  title,
  description,
  excerpt,
  meta,
  keywords,
  author,
  date,
  timeToRead,
  children,
  thumbnail,
  siteUrl
}) => {
  const site = useSiteMetadata()

  const social = (author && author.social) || site.social || []
  const twitter =
    social.find(s => s.name && s.name.toLowerCase() === 'twitter') || {}

  description = excerpt || description || site.description

  thumbnail = thumbnail && thumbnail.hero && thumbnail.hero.src
  const thumbnailUrl =
    thumbnail &&
    (thumbnail.startsWith('//')
      ? thumbnail
      : siteUrl && `${siteUrl}${thumbnail}`)

  const metaTags = [
    { itemprop: 'name', content: title || site.title },
    { itemprop: 'description', content: description },
    { name: 'description', content: description },

    { property: 'og:title', content: title || site.title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: site.name },
    { property: 'og:image', content: thumbnailUrl },

    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: site.name },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitter.url }
  ]

  if (keywords && keywords.length > 0) {
    metaTags.push({ name: 'keywords', content: keywords.join(', ') })
  }

  if (date) {
    metaTags.push({ name: 'article:published_time', content: date })
  }

  if (timeToRead) {
    metaTags.push({ name: 'twitter:label1', value: 'Reading time' })
    metaTags.push({ name: 'twitter:data1', value: `${timeToRead} min read` })
  }

  if (meta) {
    metaTags.push(meta)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      meta={metaTags}
    >
      {children}
    </Helmet>
  )
}

export default Seo
