'use client';

import React, {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';

import { DriftFieldSchema } from '@/app/components/DriftFieldSchema';
import { FieldCoords } from '@/app/models/FieldCoords/FieldCoords';
import { Entity, FromMlWebsocketData } from '@/app/models/FieldCoords/types';

interface IFootballFieldWithJson {
    currentTime: number;
}

const JSON_URL = process.env.NEXT_PUBLIC_METRICS_JSON_URL as string;

export const DriftFieldWithJson: FC<IFootballFieldWithJson> = ({ currentTime }) => {
  const [parsedCoordinates, setParsedCoordinates] = useState<FromMlWebsocketData[]>([]);
  const [cars, setCars] = useState<Entity[]>([]);

  useEffect(() => {
    const loadJsonFile = async () => {
      try {
        const response = await fetch(JSON_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch JSON data');
        }
        const data = await response.json();
        setParsedCoordinates(data);
      } catch (error) {
        console.error('JSON load error:', error);
      }
    };

    loadJsonFile();
  }, []);

  const secNumberFromStart = useMemo(() => Math.floor(currentTime), [currentTime]);

  const getFramesAtCurrentTime = useCallback(
    (jsonData: FromMlWebsocketData[]) => {
      if (!jsonData.length) return [];

      const secondObj = jsonData.find((item) => item.secNumberFromStart === secNumberFromStart);
      if (!secondObj) return [];

      return secondObj.frames;
    },
    [currentTime, secNumberFromStart],
  );
  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;

    function getData() {
      const framesAtCurrentTime = getFramesAtCurrentTime(parsedCoordinates);

      function animate(timestamp: number) {
        if (!startTime) {
          startTime = timestamp;
        }

        const elapsedTime = timestamp - startTime;
        const currentFrame = Math.floor((elapsedTime / 1000) * 29);

        if (currentFrame < framesAtCurrentTime.length) {
          const item = framesAtCurrentTime[currentFrame];
          const newPlayers = item.objects.map((data) => FieldCoords.fromMlWebsocket(data));
          setCars(newPlayers);

          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    }

    getData();

    return () => cancelAnimationFrame(animationFrameId);
  }, [currentTime]);

  return <DriftFieldSchema cars={cars} />;
};