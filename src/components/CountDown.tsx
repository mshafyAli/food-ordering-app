'use client'
import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

const endingDate = new Date("2024-06-19");

const CountDown = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  return (
    <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate} />
  );
}

export default CountDown;

