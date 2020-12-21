import React from 'react'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import LoginForm from '@widgets/LoginForm'

export default () => (
  <>
    <Seo title='Giriş' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header='Giriş Yap'
          subheader='İçeriklere erişmek için şimdi giriş yapın'
        />
        <Divider />
        <LoginForm />
      </Main>
    </Stack>
  </>
)
