'use client';

import React, { FC, useCallback, useState } from 'react';

import { DriftFieldSchema } from '@/app/components/DriftFieldSchema';
import { Entity } from '@/app/models/FieldCoords/types';
import useWebsocket from '@/app/shared/hooks/useWebsocket';

export const DriftFieldWithWebSocket: FC = () => {
  const [cars, setCars] = useState<Entity[]>([]);

  const handleUpdateFieldCoordinates = useCallback((data: any) => {
    const updatedCars: Entity[] = data?.boxes || [];

    // setCars(updatedCars);

    // data.sendMessage('');
  }, []);

  const data = useWebsocket(
    //'wss://metrics-service.computer-vision.dev.enigmagroup.tech/edge_drift_data/client_1724408283122',
    'ws://127.0.0.1:8081/drift/ws',
    handleUpdateFieldCoordinates,
  );

  console.log('isConnected', data.isConnected);

  // data.sendMessage('');

  return <DriftFieldSchema cars={cars} />;
};
