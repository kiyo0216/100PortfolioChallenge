import React from 'react'
import styled from 'styled-components/macro'

import { Item } from '../components'

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 40vw;
  left: 30rem;
  top: 0;
`

export default function Carousel() {
  const test = {
    title: "Fukakouryoku",
    src: "/portfolio1/images/Fukakouryoku 5.png"
  }
  return (
    <Container>
      <Item item={test}/>
    </Container>
  )
}