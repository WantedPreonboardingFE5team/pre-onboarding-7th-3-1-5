import React from 'react';
import { useRecoilValue } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import { keywordState } from '../../recoil/keywordState';
import { StRecommendContent } from './Recommend.style';

const RecommendList = ({ sickCd, sickNm }: { sickCd: string; sickNm: string }) => {
  const keyword = useRecoilValue(keywordState);
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
