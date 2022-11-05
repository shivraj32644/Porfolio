import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { RefContext } from '../Context/RefContext'

export const Contact = () => {
    const { contactRef } = useContext(RefContext);
  return (
    <Box ref={contactRef} >Contact</Box>
  )
}
