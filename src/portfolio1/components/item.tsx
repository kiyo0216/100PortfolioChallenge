import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  transition: all 1s ease-out;

  &.five {
    opacity: 0;
    top: -74vh;
    right: -0.9vh;
  }

  &.four {
    top: -50vh;
    right: 0.9vh;
  }

  &.three {
    top: -26.5vh;
    right: 2.7vh;
    opacity: ${props => props.hover === "up" ? 0.5 : 1};
  }

  &.two {
    top: 0vh;
    right: 5.3vh;
  }

  &.one {
    top: 35vh;
    right: 9vh;
    opacity: ${props => props.hover === "down" ? 0.5 : 1};
  }

  &.zero {
    opacity: 0;
    top: 59vh;
    right: 10.5vh;
  }
`

const Image = styled.img`
  transition: all 1s ease-out;
  width: 38vh;

  .five & {
    transform: skew(0deg, -10deg);
  }

  .four & {
    transform: skew(-10deg, -10deg);
  }

  .three & {
    transform: skew(0deg, -10deg);
  }

  .two & {
    width: 61.5vh;
    transform: skew(-10deg, -10deg);
  }

  .one & {
    transform: skew(0deg, -10deg);
  }

  .zero & {
    transform: skew(-10deg, -10deg);
  }
`

const Title = styled.h2`
  transition: all 1s ease-out;

  width: 61.5vh;
  position: absolute;
  top: -7vh;
  left: -7vh;
  text-transform: uppercase;
  font-size: 4.5vh;
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

  width: 61.5vh;
  position: absolute;
  top: 3.5vh;
  left: 3.5vh;
  text-transform: uppercase;
  font-size: 4.5vh;
  font-weight: 400;
  filter: blur(5px);
  transform: skew(-10deg, -10deg);
  z-index: 1;

  .five &, .four &, .three &, .one &, .zero & {
    opacity: 0;
  }
`

export default function Item({ hover, className, item }) {
  return (
    <Container hover={hover} className={className}>
      <Title>{item.title}</Title>
      <TitleShadow>{item.title}</TitleShadow>
      <Image src={item.image} />
    </Container>
  )
}
