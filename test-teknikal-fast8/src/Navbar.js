import React from 'react'
import styled from 'styled-components'
import img from './assests/img/download.png'
import HouseIcon from '@mui/icons-material/House';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
function Navbar() {
 return (
    <Container>
        <Logo>
            <img src={img} alt="" />
        </Logo>
        <Menu>
       
       <Icons>
           <HouseIcon />
           <span style={{marginLeft:"12px"}}>Beranda</span>
       </Icons>
       <Icons>
           <GroupsIcon sx={{ color: "#29e3b8" }} />
           <span style={{marginLeft:"12px", color:"#29e3b8"}}>Personnel List</span>
       </Icons>
       <Icons>
           <CalendarMonthIcon />
           <span style={{marginLeft:"12px"}}>Daily Attandance</span>
       </Icons>
       
        </Menu>
    </Container>
  )
}

export default Navbar;

const Container = styled.div`
display:flex;
flex-direction:column;
flex:25%;
background-color:#FFFFFF;
height:100vh;
`
const Logo = styled.div`
margin-left:56px;
margin-top:37px;

`
const Menu = styled.div`
margin-left:128px;

`
const Icons = styled.div`
    display:flex;
    margin-bottom:12px;
    font-weight:600;

`