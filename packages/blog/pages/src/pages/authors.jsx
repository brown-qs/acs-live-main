import React from 'react'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import AuthorExpanded from '@widgets/AuthorExpanded'
import { useBlogAuthors } from '@helpers-blog'

export default () => {
  const authors = useBlogAuthors()

  return (
    <>
      <Seo title='Editorial Board' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
        <PageTitle
          header='Editorial Board'
          subheader='ACS Update içeriklerini hazırlayan takımımız ile sizi tanıştırmak isteriz. Güncel çalışmaları ve toplantıları yakından takip ediyoruz.'
        />
      </Stack>
      <Stack>
        <Main>
          {authors.map(author => (
            <>
              <Divider />
              <AuthorExpanded author={author} withLink />
            </>
          ))}
        </Main>
      </Stack>
    </>
  )
}
