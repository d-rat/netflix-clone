import React from "react";
import Netflix from "../images/Netflix_Logo_RGB.png";
import Users from "../images/users.png";
import styled from 'styled-components';

const StyledNavbar=styled.nav`
 width: 100%;
  height: 10%;
  z-index: 1;
  position: fixed;
  justify-content:center;
  transition: 0.5s ease-out;
 & img{
   width: 8rem;
 }
 .users img{
  position:fixed;
   right:20px;
   width:3rem;
   top:3px;
   object-fit: contain;
 }
`
function Navbar(){



  return <StyledNavbar className="show-navbar">
  <img  classname="logo" src={Netflix} alt="Netflix" />
  <div className="users"><img src={Users} alt="Users" /></div>
  </StyledNavbar>;
}


 



export default Navbar;

