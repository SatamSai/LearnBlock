import React, { useState } from 'react'
import { Nav,Logo,Links,NavBarContent,Main,Menu } from './NavBar.styles'
import Ham from '../../assets/Menu.svg'
import {Link } from 'react-router-dom'


function NavBar({current}) {
  const [show,setShow]=useState(false)
  console.log(current)
  return (
    <Nav>
      <NavBarContent>
        <Main>
          <Logo>LearnBlock</Logo>
          <Menu src={Ham} onClick={()=>setShow(!show)}/>
        </Main>
        <Links show={show}>
          <Link className='navlink' active={true} to="/">Hash</Link>
          <Link className='navlink' active={current==="block"} to="/block">Block</Link>
          <Link className='navlink' active={current==="blockChain"} to="/blockchain">Blockchain</Link>
          <Link className='navlink' active={current==="peer"} to="/peered">Peered</Link>
        </Links>
      </NavBarContent>
    </Nav>
  )
}

export default NavBar