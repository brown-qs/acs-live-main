import React, { useState } from 'react'
import { navigate } from 'gatsby'
import firebase from 'gatsby-plugin-firebase'
import { Box, Label, Input, Button, Text, Divider, Spinner } from 'theme-ui'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

const LoginForm = () => {
  const [flag, setFlag] = useState('phone')
  const [isSentEmail, setIsSentEmail] = useState(false)
  const [isSentPhone, setIsSentPhone] = useState(false)

  const handleFlag = () => {
    flag !== 'email' ? setFlag('email') : setFlag('phone')
  }

  const actionCodeSettings = {
    url: `${typeof window !== 'undefined' &&
      window.location.origin}/verify/email`,
    handleCodeInApp: true
  }

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const handleSendCode = () => {
    if (flag !== 'email') {
      setIsSentPhone(true)
      firebase
        .firestore()
        .collection('users')
        .where('phone', '==', `+${phone}`)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size === 0) {
            navigate(`/register?phone=${phone}`)
          } else {
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
                setIsSentPhone(false)
                window.confirmationResult = confirmationResult
                navigate(`/verify/phone?phone=${phone}`)
              })
              .catch(function(error) {})
          }
        })
    } else {
      setIsSentEmail(true)
      firebase
        .firestore()
        .collection('users')
        .where('email', '==', email)
        .get()
        .then(querySnapshot => {
          if (querySnapshot.size === 0) {
            navigate(`/register?email=${email}`)
          } else {
            firebase
              .auth()
              .sendSignInLinkToEmail(email, actionCodeSettings)
              .then(function() {
                setIsSentEmail(false)
                navigate('/verify/email')
                window.localStorage.setItem('emailForSignIn', email)
              })
              .catch(function(error) {})
          }
        })
    }
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  return (
    <>
      {flag !== 'email' ? (
        <Box variant='forms.row'>
          <Label htmlFor='phone'>Cep Telefonu</Label>
          <Box variant='forms.row'>
            <PhoneInput
              inputStyle={{
                background: '#e2e8f0',
                border: 'none',
                height: '44px'
              }}
              country={'tr'}
              value={phone}
              onChange={setPhone}
            />
          </Box>
        </Box>
      ) : (
        <Box variant='forms.row'>
          <Label htmlFor='email'>Email</Label>
          <Input
            type='email'
            placeholder='email@example.com'
            id='email'
            value={email}
            onChange={handleChangeEmail}
            name='email'
            required
          />
        </Box>
      )}

      <Button type='submit' onClick={handleSendCode} id='send-code' required>
        Kod Gönder
        {(isSentEmail || isSentPhone) && <Spinner size='20' />}
      </Button>
      <Divider />
      <Text>
        {flag !== 'email' ? 'Email' : 'Telefon'} ile mi giriş yapmak istersiniz?
        <span
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '5px'
          }}
          onClick={handleFlag}
        >
          Burayı tıklayın
        </span>
      </Text>

      <Text>
        İlk kez mi giriş yapıyorsunuz?{' '}
        <span
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '5px'
          }}
          onClick={() => navigate('/register')}
        >
          Kayıt olun
        </span>
      </Text>
      <Text>
        Giriş yaparak gizlilik ve çerez politikamızı kabul etmiş olursunuz.
        <span
          style={{
            cursor: 'pointer',
            fontWeight: 'bold',
            marginLeft: '5px'
          }}
          onClick={() => navigate('/privacy')}
        >
          Ayrıntılı okuyun
        </span>
      </Text>
    </>
  )
}

export default LoginForm
