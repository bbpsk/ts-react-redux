import differenceInSeconds from 'date-fns/differenceInSeconds';
import secondsToMinutes from 'date-fns/secondsToMinutes';

export const calcSeconds = (start: number, offset: number) => {
  return differenceInSeconds(new Date(), start) + offset;
}

export const formatSeconds = (totalSeconds: number) => {
  const min = secondsToMinutes(totalSeconds);
  const sec = totalSeconds % 60;
  const format = sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
  return format;
}