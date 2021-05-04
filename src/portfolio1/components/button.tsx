import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: absolute;
  width: 38vh;
  height: 21.5vh;
  z-index: 999;
  background-color: #000;
  opacity: 0;

  &.up {
    top: -26.5vh;
    right: 2.7vh;
    transform: skew(0deg, -10deg);
  }

  &.down {
    top: 35vh;
    right: 9vh;
    transform: skew(0deg, -10deg);
  }
`

export default function Button({ direction, clickAction, setHover, ...restProps }){
  return (
    <Container className={direction} onClick={clickAction} onMouseEnter={() => setHover(direction)} onMouseLeave={() => setHover("")} {...restProps} />
  )
}
