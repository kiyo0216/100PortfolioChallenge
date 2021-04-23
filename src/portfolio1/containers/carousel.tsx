import React from 'react'
import styled from 'styled-components/macro'

import { Item } from '../components'
import { ItemDatas } from "../../database"

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 40vw;
  left: 30rem;
  top: 0;
`

export default function Carousel() {
  return (
    <Container>
      <Item item={ItemDatas[0]}/>
    </Container>
  )
}