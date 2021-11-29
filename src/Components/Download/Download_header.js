import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Discord.png'
import {MenuIcon} from '@heroicons/react/outline'
import {Link} from 'react-router-dom'
const Image = styled.img`

`

const MenuLink = styled.a`
color: white;
font-weight: 100;
font-family: 'Chivo', sans-serif;

&:hover{
  text-decoration: underline;
  cursor: pointer;
 
}
`

const Button = styled.button`
padding: 10px 22px;
background-color: white;
color: black;
outline: none;
border-radius: 50px;

&:hover{
  box-shadow: 1px 2px 5px 2px black;
  transition: 200ms ease-in-out;
}

`


const DownloadHeader = () => {
  return (
   <header style={{background: "#23272a", outline: "none", border: 0}} className="flex items-center py-4 px-6 outline-none justify-around">
      <a href="/">
        <Image src={Logo}
        alt=""
        className="w-32 h-12 object-contain"
        />
      </a>
     <div className="hidden lg:flex space-x-6 text-white">
        <Link to="/Download"><MenuLink>Download</MenuLink></Link>
        <Link to="/Nitro"><MenuLink>Nitro</MenuLink></Link>
        <MenuLink>Safety</MenuLink>
        <MenuLink>Support</MenuLink>
        <MenuLink>Blog</MenuLink>
        <MenuLink>Careers</MenuLink>
     </div>
     <div className="flex">
      <Button
      className="px-4"
      >Login</Button>
      <MenuIcon className="h-12 text-white cursor-pointer lg:hidden flex py-1 px-4 space-x-8" />
     </div>
   </header>
  )
}

export default DownloadHeader
