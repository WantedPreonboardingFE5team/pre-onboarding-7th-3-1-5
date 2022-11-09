import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { StRecommendContent } from './Recommend.style';

const RecommendList = ({ sickCd, sickNm, keyword }: { sickCd: string; sickNm: string; keyword: string }) => {
  const prevKeword = sickNm.split(keyword)[0];
  const nextKeword = sickNm.split(keyword)[1];

  return (
    <StRecommendContent key={sickCd}>
      <FiSearch />
      <p>
        {prevKeword}
        <span>{keyword}</span>
        {nextKeword}
      </p>
    </StRecommendContent>
  );
};

export default RecommendList;
