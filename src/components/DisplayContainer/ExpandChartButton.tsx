import { useState } from 'react';
import { Button } from '@mantine/core';
import * as PropTypes from 'prop-types';

ExpandButton.propTypes = {
  callback: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

// TO-DO: type validation (typescript)
export function ExpandButton({ callback, isExpanded }) {
  return (
    <Button variant="subtle" onClick={callback}>
      {isExpanded ? 'Show less...' : 'Show more...'}
    </Button>
  );
}

export const useExpandChart = () => {
  const [isExpanded, setChartExpansion] = useState(false);

  const onExpandCallback = () => {
    setChartExpansion((prevValue) => !prevValue);
  };

  return [isExpanded, onExpandCallback];
};
