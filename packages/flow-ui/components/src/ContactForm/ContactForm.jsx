import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'

const ContactForm = ({ handleSubmit, submitting, success }) => (
  <form onSubmit={handleSubmit}>
    {success && (
      <Message variant='success'>
        Bizimle iletişim kurduğunuz için teşekkür ederiz. Size en kısa zamanda
        yanıt vereceğiz!
      </Message>
    )}
    <Box variant='forms.row'>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-name'>Adınız</Label>
        <Input type='text' id='contact-form-name' name='name' required />
      </Box>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-company'>Kurumunuz</Label>
        <Input type='text' id='contact-form-company' name='company' />
      </Box>
    </Box>
    <Box variant='forms.row'>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-email'>Email</Label>
        <Input
          type='email'
          placeholder='email@example.com'
          id='contact-form-email'
          name='email'
          required
        />
      </Box>
      <Box variant='forms.column'>
        <Label htmlFor='contact-form-phone'>Cep Telefonunuz</Label>
        <Input
          type='tel'
          placeholder='(xxx) xxx-xxxx'
          id='contact-form-phone'
          name='phone'
        />
      </Box>
    </Box>
    <Box variant='forms.row'>
      <Label htmlFor='contact-form-subject'>Konu</Label>
      <Input type='text' id='contact-form-subject' name='subject' required />
    </Box>
    <Box variant='forms.row'>
      <Label htmlFor='contact-form-message'>Mesajınız</Label>
      <Textarea name='message' id='contact-form-message' />
    </Box>
    <Button
      variant={success || submitting ? 'disabled' : 'primary'}
      disabled={success || submitting}
      type='submit'
      required
    >
      Gönder {submitting && <Spinner size='20' />}
    </Button>
  </form>
)

export default ContactForm

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
