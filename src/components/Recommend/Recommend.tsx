import React from 'react';
import { StRecommend, StRecommendTitle } from './Recommend.style';
import RecommendList from './RecommendList';

const Recommend = () => {
  return (
    <StRecommend>
      <StRecommendTitle>추천 검색어</StRecommendTitle>
      <RecommendList />
    </StRecommend>
  );
};

export default Recommend;
