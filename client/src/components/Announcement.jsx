import React from 'react'
import styled from "styled-components"
const Container=styled.div`
  background-color: aqua;
  height: 40px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Free 50% Discount</Container>
  )
}

export default Announcement
