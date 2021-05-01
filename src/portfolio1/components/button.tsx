import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  position: absolute;
  width: 220px;
  height: 125px;
  z-index: 999;
  background-color: #000;
  opacity: 0;

  &.up {
    top: -150px;
    right: 15px;
    transform: skew(0deg, -10deg);
  }

  &.down {
    top: 200px;
    right: 50px;
    transform: skew(0deg, -10deg);
  }

  &:hover {
    opacity: 0.2;
  }
`

export default function Button({ direction, action, ...restProps }){
  return (
    <Container className={direction} onClick={action} {...restProps} />
  )
}