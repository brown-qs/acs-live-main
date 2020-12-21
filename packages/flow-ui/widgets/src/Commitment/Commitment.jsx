import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='ACS Hepimizin' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
        ACS'i diğer platformlardan farklı yapan güncel içerikleri en tartışmalı
        haliyle kullanıcılara ulaştırması ve cevap bekleyen sorulara ortak
        yanıtlar bulmaya çalışmasıdır. Bu platform ortak akıl ile zor olguları
        çözmek için kurulmuş bir think-tank'tir.
      </Text>
    </Card>
  </Section>
)

export default Commitment
