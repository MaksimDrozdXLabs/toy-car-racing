import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import { SliderProps } from '@mui/material/Slider/Slider';

interface CustomSliderProps extends SliderProps {}

const CustomSlider: FC<CustomSliderProps> = ({ ...props }) => (
  <Slider {...props} />
);

export default CustomSlider;
