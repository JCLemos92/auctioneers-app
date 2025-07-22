import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';

dayjs.extend(duration);
dayjs.extend(relativeTime);

export const AuctionCountdown = ({ auctionDateTime }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const updateCountdown = () => {
      const now = dayjs();
      const end = dayjs(auctionDateTime, 'YYYY/MM/DD HH:mm:ss');
      const diff = end.diff(now);

      if (diff > 0) {
        const dur = dayjs.duration(diff);
        const formatted = `${dur.days()}d ${dur.hours()}h ${dur.minutes()}m ${dur.seconds()}s`;
        setMessage(`Ending in ${formatted}`);
      } else {
        setMessage(`Auction ended ${dayjs(end).fromNow()}`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [auctionDateTime]);
  return <p className="text-red-500 text-sm font-medium">{message}</p>;
};
