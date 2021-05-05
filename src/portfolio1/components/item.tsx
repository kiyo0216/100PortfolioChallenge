import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  transition: all 1s ease-out;

  @media (orientation: landscape) {
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
  }

  @media (orientation: portrait) {
    &.five {
      opacity: 0;
      top: 20vw;
      right: 75vw;
    }

    &.four {
      opacity: 0;
      top: 22vw;
      right: 103vw;
    }

    &.three {
      top: 19vw;
      right: 63.5vw;
      opacity: ${props => props.hover === "up" ? 0.5 : 1};
    }

    &.two {
      top: 0vw;
      right: 0vw;
    }

    &.one {
      top: -5.5vw;
      right: -40vw;
      opacity: ${props => props.hover === "down" ? 0.5 : 1};
    }

    &.zero {
      opacity: 0;
      top: -10vw;
      right: -50vw;
    }
  }
`

const Image = styled.img`
  transition: all 1s ease-out;
  width: 38vh;
  
  @media (orientation: landscape) {
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
  }
  
  @media (orientation: portrait) {
    width: 38vw;

    .five & {
      transform: skew(-10deg, 0deg);
    }

    .four & {
      transform: skew(-10deg, -10deg);
    }

    .three & {
      transform: skew(-10deg, 0deg);
    }

    .two & {
      width: 61.5vw;
      transform: skew(-10deg, -10deg);
    }

    .one & {
      transform: skew(-10deg, 0deg);
    }

    .zero & {
      transform: skew(-10deg, -10deg);
    }
  }
`

const Title = styled.h2`
  transition: all 1s ease-out;

  @media (orientation: landscape) {
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
  }

  @media (orientation: portrait) {
    width: 61.5vw;
    position: absolute;
    top: -7vw;
    left: -7vw;
    text-transform: uppercase;
    font-size: 4.5vw;
    font-weight: 400;
    color: #CFC64F;
    transform: skew(-10deg, -10deg);
    z-index: 2;

    .five &, .four &, .three &, .one &, .zero & {
      opacity: 0;
    }
  }

`

const TitleShadow = styled.h2`
  transition: all 1s ease-out;

  @media (orientation: landscape) {
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
  }

  @media (orientation: portrait) {
    width: 61.5vw;
    position: absolute;
    top: 3.5vw;
    left: 3.5vw;
    text-transform: uppercase;
    font-size: 4.5vw;
    font-weight: 400;
    filter: blur(5px);
    transform: skew(-10deg, -10deg);
    z-index: 1;

    .five &, .four &, .three &, .one &, .zero & {
      opacity: 0;
    }
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
