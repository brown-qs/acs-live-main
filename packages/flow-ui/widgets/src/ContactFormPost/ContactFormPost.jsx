import React from 'react'
import { Card } from 'theme-ui'
import ContactFormComponent from '@components/ContactFormPost'
import useForm from '@helpers/useForm'

const ContactFormPost = () => {
  const { handleSubmit, submitting, success } = useForm()

  return (
    <Card variant='paper'>
      <ContactFormComponent {...{ handleSubmit, submitting, success }} />
    </Card>
  )
}

export default ContactFormPost
