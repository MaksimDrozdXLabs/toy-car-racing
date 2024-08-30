'use client';

import React, {
  FC, useEffect, useRef, useState,
} from 'react';

import BackgroundImage from '@/app/components/BackgroundImage';
import { Entity } from '@/app/models/FieldCoords/types';
import { getFieldDimensions } from '@/app/shared/handlers/getFieldDimensions';

import { CarDot, DriftFieldWrapper } from './style';

interface DriftFieldSchemaProps {
  cars: Entity[];
}

export const DriftFieldSchema: FC<DriftFieldSchemaProps> = ({
  cars,
}) => {
  const [currentWidth, setCurrentWidth] = useState(790);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { defaultWidth, defaultHeight, height } = getFieldDimensions(currentWidth);

  useEffect(() => {
    if (elementRef.current) {
      setCurrentWidth(elementRef.current?.offsetWidth);
    }

    const handleResize = () => {
      if (elementRef.current) {
        setCurrentWidth(elementRef.current?.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <DriftFieldWrapper width={currentWidth} height={height} ref={elementRef}>
      <BackgroundImage />
      {cars.map((car, index) => (
        <CarDot
          key={index}
          x={car.x * (currentWidth / defaultWidth)}
          y={car.y * (height / defaultHeight)}
          color={car.color}
          border={car.border}
        />
      ))}
    </DriftFieldWrapper>
  );
};
