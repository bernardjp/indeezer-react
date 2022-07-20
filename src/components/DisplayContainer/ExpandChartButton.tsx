import { useState } from 'react';
import { Button } from '@mantine/core';
import * as PropTypes from 'prop-types';

type ExpandButtonPropType = {
  callback: () => void,
  isExpanded: boolean
};

ExpandButton.propTypes = {
  callback: PropTypes.func.isRequired,
  isExpanded: PropTypes.bool.isRequired
};

export function ExpandButton(props: ExpandButtonPropType) {
  const { callback, isExpanded } = props;

  return (
    <Button variant="subtle" onClick={callback}>
      {isExpanded ? 'Show less...' : 'Show more...'}
    </Button>
  );
}

export const useExpandChart = (): [boolean, () => void] => {
  const [isExpanded, setChartExpansion] = useState(false);

  const onExpandCallback = () => {
    setChartExpansion((prevValue) => !prevValue);
  };

  return [isExpanded, onExpandCallback];
};
