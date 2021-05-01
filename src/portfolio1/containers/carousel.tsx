import React, { useState } from 'react'
import styled from 'styled-components/macro'

import { Item } from '../components'
import { Button } from '../components'
import { ItemDatas } from "../../database"

const Container = styled.div`
  position: absolute;
  height: 40vh;
  width: 40vw;
  left: 30rem;
  top: 40vh;

  * {
    user-select: none;
    user-drag: none;
  }
`

export default function Carousel() {
  const [index, setIndex] = useState<number>(0)
  const listString: string[] = ["zero", "one", "two", "three", "four", "five"]

  function mod(n: number, d: number) {
    return ((n%d)+d)%d
  }

  return (
    <Container>
      <Item className={listString[mod(index+5,6)]} item={ItemDatas[5]}/>
      <Item className={listString[mod(index+4,6)]} item={ItemDatas[4]}/>
      <Item className={listString[mod(index+3,6)]} item={ItemDatas[3]}/>
      <Item className={listString[mod(index+2,6)]} item={ItemDatas[2]}/>
      <Item className={listString[mod(index+1,6)]} item={ItemDatas[1]}/>
      <Item className={listString[mod(index,6)]} item={ItemDatas[0]}/>
      <Button direction={"up"} action={() => setIndex(index+1)} />
      <Button direction={"down"} action={() => setIndex(index-1)} />
    </Container>
  )
}