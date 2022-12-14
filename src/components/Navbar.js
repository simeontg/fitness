import React from 'react'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Stack
    direction='row'
    sx={{ gap: { sm: '122px', xs:'40px'}, mt: {sm: '32px', xs: '20px'}}}>
        <Link to='/' >
            <img src={Logo} alt='logo' style={{
                height: '48px', 
                width: '48px',
                margin: '0 20px'}} />
        </Link>
        <Stack
        direction='row'
        gap='40px'
        fontSize='24'
        alignItems='flex-end'
        >
            <Link to='/' className='nav' style={{textDecoration: 'none', color: '#3A1212'}}>Home</Link>
            <a href="#exercises" className='nav' style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar