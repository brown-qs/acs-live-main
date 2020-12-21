import React from 'react'
import { Card as CardComponent } from 'theme-ui'
import { Stack, Main, Sidebar } from '@layout'
import { navigate } from 'gatsby'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Sticky from '@components/Sticky'
import Seo from '@widgets/Seo'
import AuthorCompact from '@widgets/AuthorCompact'
import Sponsor from '@widgets/Sponsor'
import BannerHorizontal from '@widgets/BannerHorizontal'
import { isLoggined } from '@helpers-blog'
import {
  PostHead,
  PostImage,
  PostBody,
  PostComments,
  PostTagsShare,
  PostFooter
} from '@widgets/Post'

const Post = ({
  data: { post, tagCategoryPosts, tagPosts, categoryPosts, previous, next },
  location,
  ...props
}) => {
  if (!isLoggined()) {
    typeof window !== 'undefined' && navigate('/login')
  }

  const relatedPosts = [
    ...(tagCategoryPosts ? tagCategoryPosts.nodes : []),
    ...(tagPosts ? tagPosts.nodes : []),
    ...(categoryPosts ? categoryPosts.nodes : [])
  ]
  const { pageContext: { services = {}, siteUrl } = {} } = props

  return (
    <>
      <Seo {...post} siteUrl={siteUrl} />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PostHead {...post} />
      </Stack>
      <Divider />

      <Stack effectProps={{ fraction: 0 }}>
        <Main>
          <BannerHorizontal />
          <Divider space={3} />
          <CardComponent variant='paper'>
            <PostImage {...post} inCard />
            <PostBody {...post} />
            <PostTagsShare {...post} location={location} />
            {services.disqus && <PostComments {...post} />}
            <PostFooter {...{ previous, next }} />
          </CardComponent>
        </Main>
        <Sidebar>
          <AuthorCompact author={post.author} omitTitle />
          <Divider />
          <Sponsor />
          <Divider />
          {post.category && (
            <Sticky>
              <CardList
                title='Related Posts'
                nodes={relatedPosts}
                variant='horizontal-aside'
                limit={6}
                omitMedia
                omitCategory
                distinct
                aside
              />
            </Sticky>
          )}
        </Sidebar>
      </Stack>
    </>
  )
}

export default Post
