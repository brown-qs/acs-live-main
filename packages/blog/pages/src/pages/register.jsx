import React from 'react'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import RegisterForm from '@widgets/RegisterForm'

export default () => (
  <>
    <Seo title='Register' />
    <Divider />
    <Stack>
      <Main>
        <PageTitle
          header='Kayıt Ol'
          subheader='İçeriklere erişmek için şimdi kayıt olun'
        />
        <Divider />
        <RegisterForm />
      </Main>
    </Stack>
  </>
)
