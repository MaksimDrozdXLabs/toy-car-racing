import {
  useCallback, useEffect, useRef, useState,
} from 'react';

import { Entity } from '@/app/models/FieldCoords/types';

type MessageHandler = (updatedPlayers: Entity[]) => void;

const useWebsocket = (url: string, onMessage: MessageHandler) => {
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  const sendMessage = useCallback((message: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    }
  }, []);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      setIsConnected(true);
    };

    socket.onmessage = (e: any) => {
      const data = JSON.parse(e.data);
      // console.log();
      onMessage(data);
    };

    socket.onclose = () => {
      setIsConnected(false);
      console.log('WebSocket disconnected');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socketRef.current = socket;

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [url, onMessage]);

  return { isConnected, sendMessage };
};

export default useWebsocket;
