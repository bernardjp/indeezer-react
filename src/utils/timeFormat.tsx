const addZero = (n: number): string => (`${n < 10 ? '0' : ''}${n}`);

const getFormatedTimer = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const formatedMin = addZero(minutes);
  const formatedSec = addZero(seconds);

  return `${formatedMin}:${formatedSec}`;
};

export default getFormatedTimer;
