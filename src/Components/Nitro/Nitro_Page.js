import React from 'react'
import Nitro_Header from './Header'
import Logo from '../../Images/Discord-black.png'
import {MenuIcon} from '@heroicons/react/outline'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import styled from 'styled-components'




const Image = styled.img`

`

const MenuLink = styled.a`
color: black;
font-weight: 100;
font-family: 'Chivo', sans-serif;

&:hover{
  text-decoration: underline;
  cursor: pointer;
 
}
`

const Button = styled.button`
padding: 10px 22px;
background-color: black;
color: white;
outline: none;
border-radius: 50px;

&:hover{
  box-shadow: 1px 2px 5px 2px black;
  transition: 200ms ease-in-out;
}

`


const Nitro_Page = () => {
    return (
        <>
           <Navbar/>
          <Nitro_Header/>
          <Footer/>
        </>
    
    )
}


const  Navbar = () => {
    return (
        <header style={{backgroundColor: "linear-gradient(#B983FF, #9198e5);", outline: "none", border: 0}} className="flex items-center py-4 px-6 outline-none justify-around text-black">
           <a href="/">
             <Image src={Logo}
             alt=""
             className="w-32 h-12 object-contain"
             />
           </a>
          <div className="hidden lg:flex space-x-6 text-white">
             <Link to="/Download"><MenuLink>Download</MenuLink></Link>
             <Link to="/Nitro"><MenuLink >Nitro</MenuLink></Link>
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

export default Nitro_Page
