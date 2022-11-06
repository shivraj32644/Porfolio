import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { RefContext } from '../Context/RefContext'
import styles from '../Styles/Global.css'
export const Contact = () => {
    const { contactRef } = useContext(RefContext);
  return (
    <Box pb={'50px'} ref={contactRef} >
      <h2 className={'sectionHeading'} data-outline="Projects">
            Projects
          </h2>
    
    </Box>
  )
}
