import React from 'react'
import { navigate } from 'gatsby'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import firebase from 'gatsby-plugin-firebase'
import { Card, Spinner, Text } from 'theme-ui'

export default () => {
  if (typeof window !== 'undefined') {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Please provide your email for confirmation')
      }
      firebase
        .auth()
        .signInWithEmailLink(email, window.location.href)
        .then(function(result) {
          window.localStorage.removeItem('emailForSignIn')
          window.localStorage.setItem(
            'gatsbyUser',
            JSON.stringify(firebase.auth().currentUser)
          )
          navigate('/')
        })
        .catch(function(error) {})
    }
  }
  return (
    <>
      <Seo title='Emailinizi Teyid Edin' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle header='Giriş Yapın' subheader='Hesabınıza giriş yapın' />
          <Divider />
          <Card
            variant='paper'
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Spinner />
            <Text style={{ marginLeft: '10px' }}>
              Mailinze gelen linki onaylayın
            </Text>
          </Card>
        </Main>
      </Stack>
    </>
  )
}
