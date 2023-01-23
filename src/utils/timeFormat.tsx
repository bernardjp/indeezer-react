const addZero = (n: number): string => (`${n < 10 ? '0' : ''}${n}`);

export const getFormatedTimer = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const formatedMin = addZero(minutes);
  const formatedSec = addZero(seconds);

  return `${formatedMin}:${formatedSec}`;
};

export const getFullFormatedTimer = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);
  const seconds = Math.floor(time % 60);

  const formatedMin = addZero(minutes > 60 ? minutes - 60 : minutes);
  const formatedSec = addZero(seconds);

  if (hours > 0) {
    return `${hours} hrs ${formatedMin} minutes`;
  }
  return `${formatedMin} minutes ${formatedSec} seconds`;
};
