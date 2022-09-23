import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ( {targetMuscleExercises, equipmentExercises}) => {
    console.log(targetMuscleExercises)
  return (
    <Box sx={{ mt: {lg: '100px', xs:'0'}}}>
        <Typography variant='h3' mb={5}>
            Some exercises that target the same muscle group
        </Typography>
        <Stack direction='row' sx={{ p: '2', position:'relative'}}>
          {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises.slice(0,3)} /> : <Loader />}
        </Stack>
         <Typography variant='h3' mb={5} mt={6}>
         Some exercises that use the same equipment
     </Typography>
     <Stack direction='row' sx={{ p: '2', position:'relative'}}>
       {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises.slice(0,3)} /> : <Loader />}
     </Stack>
    </Box>
  )
}

export default SimilarExercises