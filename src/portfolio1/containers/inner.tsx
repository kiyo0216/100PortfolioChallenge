import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  height: 80%;
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #D9D375;
`

const Text = styled.p`
  width: 20rem;
  font-size: 0.8rem;
  line-height: 170%;
  color: #CFC64F;
`

export default function Inner() {
  return (
    <Container>
      <Title>Kiyotaka<br />Akaiwa</Title>
      <Text>I am a student at El Camino College trying to find a job as a front-end developer / web designer. <br /><br />My preferred programming languages are HTML / CSS / JS / TS / Python, although I am willing to learn new languages. <br /><br />Some other technologies I use are React / GatsbyJS / AWS / Webflow. In the future, I would also like to add Shopify / NodeJS / JAMStack to my skillset.</Text>
    </Container>
  )
}