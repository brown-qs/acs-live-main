import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers/useSiteMetadata'
import attachSocialIcons from '@helpers/attachSocialIcons'

const Social = () => {
  const { social } = useSiteMetadata()

  return (
    <Section aside title='Konuşalım'>
      <Card variant='paper'>
        <Text variant='p'>
          Birbirimizden öğreneceğimiz çok şey olduğuna inanıyoruz.
        </Text>
        <Navigation items={attachSocialIcons(social)} iconOnly />
      </Card>
    </Section>
  )
}

export default Social
