import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'




const HorizontalScrollbar = ({data, bodyPart, setBodyPart, isBodyPart}) => {
  return (

    <div className='body-parts'>
    {data.map((item) => (
        <Box 
        key={item.id || item}
        id={item.id || item}
        title={item.id || item}
        m='0 40px'
        >
            { isBodyPart ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item}/>}
        </Box>
    )
    )}
    </div>
  )
}

export default HorizontalScrollbar