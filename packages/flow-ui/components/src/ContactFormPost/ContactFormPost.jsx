import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label, Input, Textarea, Button, Message, Spinner } from 'theme-ui'

const ContactFormPost = ({ handleSubmit, submitting, success }) => (
  <form onSubmit={handleSubmit}>
    {success && (
      <Message variant='success'>
        Bizimle iletişim kurduğunuz için teşekkür ederiz. Size en kısa zamanda
        yanıt vereceğiz!
      </Message>
    )}

    <Box variant='forms.row'>
      <Label htmlFor='contact-form-name'>Adınız</Label>
      <Input type='text' id='contact-form-name' name='name' required />
    </Box>
    <Box variant='forms.row'>
      <Label htmlFor='contact-form-message'>Sorunuz</Label>
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

export default ContactFormPost

ContactFormPost.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  success: PropTypes.bool
}
