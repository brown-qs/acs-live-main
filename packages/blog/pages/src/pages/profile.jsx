import React, { useEffect, useState } from 'react'
import firebase from 'gatsby-plugin-firebase'
import { Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import { getUser } from '@helpers-blog'
import {
  Card,
  Box,
  Label,
  Input,
  Text,
  Button,
  Spinner,
  Divider as ThemeDivider
} from 'theme-ui'

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)
  const [id, setId] = useState('')
  const [logginedUserInfo, setLogginedUserInfo] = useState(getUser() || {})
  useEffect(() => {
    if (logginedUserInfo.phoneNumber) {
      firebase
        .firestore()
        .collection('users')
        .where('phone', '==', logginedUserInfo.phoneNumber)
        .get()
        .then(res => {
          if (res.size > 0) {
            res.forEach(item => {
              setUserInfo(() => item.data())
              setId(() => item.id)
            })
          }
        })
    } else {
      firebase
        .firestore()
        .collection('users')
        .where('email', '==', logginedUserInfo.email)
        .get()
        .then(res => {
          if (res.size > 0) {
            res.forEach(item => {
              setUserInfo(() => item.data())
              setId(() => item.id)
            })
          }
        })
    }
  }, [])

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [idCard, setIdCard] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [invalidIdNumber, setInvalidIdNumber] = useState(false)

  useEffect(() => {
    if (userInfo) {
      setName(() => userInfo.name)
      setEmail(() => userInfo.email)
      setPhone(() => userInfo.phone)
      setCompany(() => userInfo.company)
      setIdCard(() => userInfo.idCard)
    }
  }, [userInfo])

  const handleChangeName = e => {
    setName(e.target.value)
  }

  const handleChangeEmail = e => {
    setEmail(e.target.value)
  }

  const handleChangeCompany = e => {
    setCompany(e.target.value)
  }

  const handleChangeIdCard = e => {
    setIdCard(e.target.value)
  }

  const valicationIdNumber = param => {
    const value = String(param)
    if (!/^[1-9]\d{10}$/.test(value)) return false
    const digits = value.split('')
    const d10 = Number(digits[9])
    const d11 = Number(digits[10])
    let sumOf10 = 0
    let evens = 0
    let odds = 0
    digits.forEach(function(item, index) {
      let d = Number(item)
      if (index < 10) sumOf10 += d
      if (index < 9) {
        if ((index + 1) % 2 === 0) {
          evens += d
        } else {
          odds += d
        }
      }
    })
    if (sumOf10 % 10 !== d11) return false
    if ((odds * 7 + evens * 9) % 10 !== d10) return false
    if ((odds * 8) % 10 !== d11) return false
    return true
  }

  const handleUpdate = () => {
    setSubmitted(true)
    const inputedUserInfo = {
      name,
      email,
      phone: `+${phone}`,
      company,
      idCard
    }

    if (!valicationIdNumber(idCard)) {
      setInvalidIdNumber(true)
      setSubmitted(false)
    } else {
      setInvalidIdNumber(false)
      firebase
        .firestore()
        .collection('users')
        .doc(id)
        .update(inputedUserInfo)
        .then(res => {
          setSubmitted(false)
        })
    }
  }

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        window.localStorage.removeItem('gatsbyUser')
        window.location.href = `${window.location.origin}/login`
      })
  }

  return (
    <>
      <Seo title='Profilim' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle header='Profilim' />
          <Divider />
          <Card variant='paper'>
            <Box variant='forms.row'>
              <Box variant='forms.column'>
                <Label htmlFor='name'>Adınız Soyadınız</Label>
                <Input
                  type='text'
                  id='name'
                  value={name}
                  onChange={handleChangeName}
                />
              </Box>
              <Box variant='forms.column'>
                <Label htmlFor='company'>Kurumunuz</Label>
                <Input
                  type='text'
                  id='company'
                  value={company}
                  onChange={handleChangeCompany}
                />
              </Box>
            </Box>
            <Box variant='forms.row'>
              <Box variant='forms.column'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  value={email}
                  id='email'
                  onChange={handleChangeEmail}
                  placeholder='email@example.com'
                />
              </Box>
              <Box variant='forms.column'>
                <Label htmlFor='id-card'>TC Kimlik No</Label>
                <Input
                  type='text'
                  value={idCard}
                  onChange={handleChangeIdCard}
                  id='id-card'
                />
                {invalidIdNumber && (
                  <Text style={{ color: 'red' }}>Geçersiz kimlik no</Text>
                )}
              </Box>
            </Box>
            <Box variant='forms.row'>
              <Label htmlFor='phone'>Cep Telefonu</Label>
              <PhoneInput
                country={'tr'}
                inputStyle={{
                  background: '#e2e8f0',
                  border: 'none',
                  height: '44px',
                  width: '100%'
                }}
                id='phone'
                value={phone}
                onChange={setPhone}
              />
            </Box>
            <ThemeDivider />
            <Button type='button' id='update' onClick={handleUpdate}>
              Kaydet {submitted && <Spinner size='20' />}
            </Button>
            <Text style={{ marginTop: '10px' }}>
              Çıkış mı yapmak istiyorsunuz?
              <span
                style={{
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginLeft: '5px'
                }}
                onClick={handleLogout}
              >
                Burayı tıkla
              </span>
            </Text>
          </Card>
        </Main>
      </Stack>
    </>
  )
}

export default Profile
