import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])

    
  return (
   <Box>
    <HeroBanner />
    <Search 
    setExercises={setExercises}
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
    />
    <Exercises 
    setExercises={setExercises}
    bodyPart={bodyPart}
    exercises={exercises}
    />
   </Box>
  )
}

export default Home