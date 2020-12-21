import { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

const useForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [values, setValues] = useState({})
  const [success, setSuccess] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitting(true)
    const form = e.target
    axios({
      method: 'post',
      url: `https://formspree.io/${process.env.GATSBY_FORM_ID}`,
      data: new FormData(form)
    })
      .then(r => {})
      .catch(r => {})
    setSubmitted(true)
  }

  const sendValues = useCallback(() => {
    setTimeout(function() {
      console.log(values)
      setSuccess(true)
      setSubmitting(false)
    }, 2000)
  }, [values])

  useEffect(() => {
    if (submitted) {
      sendValues()
    }
  }, [submitted, sendValues])

  return {
    handleSubmit,
    submitting,
    submitted,
    success
  }
}

export default useForm
