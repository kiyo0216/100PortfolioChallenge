import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { Item } from '../components'
import { ItemDatas } from "../../database"

const Container = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  left: 30rem;
  top: 40vh;
`

export default function Carousel() {
  const [index, setIndex] = useState<number>(0)
  const listString: string[] = ["zero", "one", "two", "three", "four", "five"]

  return (
    <Container>
      <Item className={listString[(index+5)%6]} item={ItemDatas[5]}/>
      <Item className={listString[(index+4)%6]} item={ItemDatas[4]}/>
      <Item className={listString[(index+3)%6]} item={ItemDatas[3]}/>
      <Item className={listString[(index+2)%6]} item={ItemDatas[2]}/>
      <Item className={listString[(index+1)%6]} item={ItemDatas[1]}/>
      <Item className={listString[index%6]} item={ItemDatas[0]}/>
      <div style={{ position: "fixed", zIndex: 999 }} onClick={() => setIndex(index+1)}>HELLO WORLD</div>
    </Container>
  )
}