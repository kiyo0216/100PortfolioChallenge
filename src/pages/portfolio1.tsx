import React from 'react'
import styled from 'styled-components/macro'

import { Outer, Inner, Carousel } from '../portfolio1/containers'

import 'normalize.css'
import '../../static/portfolio1/css/global.css'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 0 5rem 0 5rem;
  background-color: #45272D;
`

export default function Portfolio1() {
  return (
    <Container>
      <Outer>
        <Inner />
      </Outer>
      <Carousel />
    </Container>
  )
}