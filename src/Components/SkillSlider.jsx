import { Box, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react'
import React, { useState } from 'react'

export const SkillSlider = ({ val }) => {
    console.log(val)
    const [sliderValue, setSliderValue] = useState(val)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  return (
    <Box pt={6} pb={2}>
      <Slider defaultValue={sliderValue} aria-label='slider-ex-6'  onChange={(val) => setSliderValue(val)}>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg='blue.500'
          color='white'
          mt='-10'
          ml='-5'
          w='12'
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}
