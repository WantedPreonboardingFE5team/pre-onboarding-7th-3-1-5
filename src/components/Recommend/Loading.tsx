import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { StLoading } from './Recommend.style';

const Loading = () => {
  return (
    <StLoading>
      <BeatLoader color="#1976d2" margin={2} />
    </StLoading>
  );
};

export default Loading;
