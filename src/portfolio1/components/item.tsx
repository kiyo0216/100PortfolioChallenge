import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Image = styled.img`
  width: 100%;
  transform: skew(-10deg, -10deg);
`

const Title = styled.h2`
  transform: skew(-10deg, -10deg);
`

export default function Item({ item }) {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Image src={item.src} />
    </Container>
  )
}