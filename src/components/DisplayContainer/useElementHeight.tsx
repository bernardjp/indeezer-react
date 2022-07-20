import { useState, useEffect } from 'react';
import { useElementSize } from '@mantine/hooks';

const useElementHeight = () => {
  const { ref, height } = useElementSize();
  const [newHeight, setNewHeight] = useState('');

  useEffect(() => {
    const elementHeight = Math.ceil(ref.current.parentElement.clientHeight);
    setNewHeight(`${elementHeight}px`);
  }, [height]);

  return { ref, newHeight };
};

export default useElementHeight;
