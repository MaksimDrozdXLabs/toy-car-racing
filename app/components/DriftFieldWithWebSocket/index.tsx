'use client';

import React, { FC, useCallback, useState } from 'react';

import { DriftFieldSchema } from '@/app/components/DriftFieldSchema';
import { Entity } from '@/app/models/FieldCoords/types';
import useWebsocket from '@/app/shared/hooks/useWebsocket';

export const DriftFieldWithWebSocket: FC = () => {
  const [cars, setCars] = useState<Entity[]>([]);

  const handleUpdateFieldCoordinates = useCallback((data: any) => {
    const updatedCars: Entity[] = data?.boxes[0] || [];
    setCars(updatedCars);
    debugger;
  }, []);

  const data = useWebsocket(
    `${process.env.NEXT_PUBLIC_WS_URL}`,
    handleUpdateFieldCoordinates,
  );

  console.log('isConnected', data.isConnected);

  return <DriftFieldSchema cars={cars} />;
};
