import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'

const Home = () => {
    
  return (
   <Box>
    <HeroBanner />
    <Search />
    <Exercises />
   </Box>
  )
}

export default Home