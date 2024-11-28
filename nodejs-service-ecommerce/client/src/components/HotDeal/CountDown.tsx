import { useEffect, useState } from 'react';
import { PromotionData } from '../../utils/interface';

interface CountDownProps {
  promotionData: PromotionData;
}
interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountDown = ({ promotionData }: CountDownProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date('2023-12-30') - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return {};
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = (Object.keys(timeLeft) as Array<keyof TimeLeft>).map(
    (interval) => {
      if (!timeLeft[interval]) {
        return null;
      }
      return (
        <span className="text-[25px] text-[#475ad2]" key={interval}>
          {' '}
          {timeLeft[interval]}
          {' '}
          {interval}
          {' '}
        </span>
      );
    },
  );

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
}

export default CountDown;
