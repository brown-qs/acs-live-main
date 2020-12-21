import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

export default () => (
  <>
    <Seo title='Sayfa Bulunamadı' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header='Üzgünüz. Bu sayfayı bulamadık.'
            subheader='Yazım hatası yapmış olabilirsiniz. Belki de bu sayfayı biz yayın kaldırdık.'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            Ana Sayfaya Gidin
          </Button>
        </Section>
      </Main>
    </Stack>
  </>
)
