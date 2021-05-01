import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  transition: all 1s ease-out;

  &.five {
    opacity: 0;
    top: -420px;
    right: -5px;
  }

  &.four {
    top: -285px;
    right: 5px;
  }

  &.three {
    top: -150px;
    right: 15px;
  }

  &.two {
    top: 0px;
    right: 30px;
  }

  &.one {
    top: 200px;
    right: 50px;
  }

  &.zero {
    opacity: 0;
    top: 330px;
    right: 60px;
  }
`

const Image = styled.img`
  transition: all 1s ease-out;

  .five & {
    width: 220px;
    transform: skew(0deg, -10deg);
  }

  .four & {
    width: 220px;
    transform: skew(-10deg, -10deg);
  }

  .three & {
    width: 220px;
    transform: skew(0deg, -10deg);
  }

  .two & {
    width: 350px;
    transform: skew(-10deg, -10deg);
  }

  .one & {
    width: 220px;
    transform: skew(0deg, -10deg);
  }

  .zero & {
    width: 220px;
    transform: skew(-10deg, -10deg);
  }
`

const Title = styled.h2`
  transition: all 1s ease-out;

  width: 350px;
  position: absolute;
  top: -40px;
  left: -40px;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 400;
  color: #CFC64F;
  transform: skew(-10deg, -10deg);
  z-index: 2;

  .five &, .four &, .three &, .one &, .zero & {
    opacity: 0;
  }
`

const TitleShadow = styled.h2`
  transition: all 1s ease-out;

  width: 350px;
  position: absolute;
  top: 20px;
  left: 20px;
  text-transform: uppercase;
  font-size: 2.5rem;
  font-weight: 400;
  filter: blur(5px);
  transform: skew(-10deg, -10deg);
  z-index: 1;

  .five &, .four &, .three &, .one &, .zero & {
    opacity: 0;
  }
`

export default function Item({ className, item }) {
  return (
    <Container className={className}>
      <Title>{item.title}</Title>
      <TitleShadow>{item.title}</TitleShadow>
      <Image src={item.image} />
    </Container>
  )
}