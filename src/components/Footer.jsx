import React from "react";
import styled from 'styled-components'

const StyledFooter=styled.footer`
width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: black;
`

function Footer() {
  return (
    <StyledFooter>
      <h2>Netflix India</h2>
      <h3>Made with Love by Dilip</h3>
      <h3>Contact me at dilipsinghdangwal@gmail.com</h3>
    </StyledFooter>
  );
}

export default Footer;
