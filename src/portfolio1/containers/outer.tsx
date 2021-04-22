import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 2.5rem;
  width: 100%;
  border-bottom: 1px solid #D9D375;
`

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 2.5rem;
  width: 100%;
  border-top: 1px solid #D9D375;
`

const Contact = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  color: #D9D375;
`

const Copyright = styled.div`
  font-size: 0.8rem;
  color: #CFC64F;
`

export default function Outer({ children }) {
  return (
    <Container>
      <Top>
        <Contact>
          Contact
        </Contact>
      </Top>
      { children }
      <Bottom>
        <Copyright>
          &copy; 2021 Kiyotaka Akaiwa
        </Copyright>
      </Bottom>
    </Container>
  )
}