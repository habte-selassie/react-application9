import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <Typography variant="h4">
        {timeLeft.days > 0 && <span>{timeLeft.days}d </span>}
        {timeLeft.hours > 0 && <span>{timeLeft.hours}h </span>}
        {timeLeft.minutes > 0 && <span>{timeLeft.minutes}m </span>}
        {timeLeft.seconds > 0 && <span>{timeLeft.seconds}s </span>}
        {Object.keys(timeLeft).length === 0 && <span>Countdown expired</span>}
      </Typography>
    </div>
  );
};

export default CountdownTimer;
