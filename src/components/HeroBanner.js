import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{ mt: { lg: '180px', xs: '70px'}, ml: {sm: '50px'}}}
    position='relative'
    p='20px'>
        <Typography color='#FF2625'
        fontWeight='600'
        fontSize='26px'>
            Fitness Club
        </Typography>
        <Typography
        fontWeight='700'
        sx={{ fontSize: {lg: '44px', xs: '40px'}}}
        mt='30px'
        mb='23px'>
            Sweat, smile <br /> and Repeat
        </Typography>
         <Typography
         fontSize='22px'
         lineHeight='35px'
         mb={4}>
         Check out the most effective exercies!
        </Typography>
        <Button
        color='error'
        variant='contained'
        href='#exercises'
        sx={{padding: '12px 20px'}}
        >Explore exercises</Button>
        <Typography
        fontWeight='600'
        color='#ff2625'
        fontSize='200px'
        sx={{
            opacity: 0.1,
            display: { lg:'block', xs: 'none'}
        }}>
            Exercise
        </Typography>
        <img src={HeroBannerImage} className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner