import React, { useState } from 'react'
import { navigate } from 'gatsby'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import firebase from 'gatsby-plugin-firebase'
import {
  Card,
  Text,
  Box,
  Input,
  Button,
  Divider as ThemeDivider
} from 'theme-ui'
import * as queryString from 'query-string'

export default () => {
  const { phone } =
    typeof window !== 'undefined' && queryString.parse(window.location.search)
  const [verifyPhoneNumber, setVerifyPhoneNumber] = useState('')

  const handleChangeVerifyPhoneNumber = e => {
    setVerifyPhoneNumber(e.target.value)
  }

  const handleVerifyPhoneNumber = () => {
    if (typeof window !== 'undefined') {
      var code = verifyPhoneNumber
      window.confirmationResult
        .confirm(code)
        .then(function(result) {
          window.localStorage.setItem(
            'gatsbyUser',
            JSON.stringify(firebase.auth().currentUser)
          )
          navigate('/')
        })
        .catch(function(error) {
          console.log('Fail: ', error)
        })
    }
  }

  const handleSendCode = () => {
    if (typeof window !== 'undefined') {
      firebase.auth().languageCode = 'tr'

      window.loginRecaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'send-code',
        {
          size: 'invisible',
          callback: function(response) {}
        }
      )

      firebase
        .auth()
        .signInWithPhoneNumber(`+${phone}`, window.loginRecaptchaVerifier)
        .then(function(confirmationResult) {
          window.confirmationResult = confirmationResult
          navigate(`/verify/phone?phone=${phone}`)
        })
        .catch(function(error) {})
    }
  }

  return (
    <>
      <Seo title='Girişinizi Teyid Edin' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle header='Giriş Yap' subheader='Hesabınıza giriş yapın' />
          <Divider />
          <Card variant='paper'>
            <Box variant='forms.row'>
              <Text>Kodu Girin</Text>
            </Box>
            <Box variant='forms.row'>
              <Box variant='forms.column'>
                <Input
                  type='text'
                  value={verifyPhoneNumber}
                  onChange={handleChangeVerifyPhoneNumber}
                />
              </Box>
            </Box>
            <Button onClick={handleVerifyPhoneNumber} required>
              Giriş Yap
            </Button>
            <ThemeDivider />
            <Text>
              Kod gelmedi mi?
              <span
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}
                id='send-code'
                onClick={handleSendCode}
              >
                Tekrar gönder
              </span>
            </Text>
          </Card>
        </Main>
      </Stack>
    </>
  )
}
