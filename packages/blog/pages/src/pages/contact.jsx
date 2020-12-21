import React from 'react'
import { Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'

export default () => {
  return (
    <>
      <Seo title='İletişim' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle
            header='Bize Yazın'
            subheader='Yorumlarınız ve önerileriniz bizim için çok kıymetli. Bize her konuda görüşlerinizi iletebilirsiniz. En kısa zamanda yanıt vereceğiz.'
          />
          <Divider />
          <ContactForm />
        </Main>
        <Sidebar>
          <Commitment />
          <Divider />
          <ContactInfo />
        </Sidebar>
      </Stack>
    </>
  )
}
