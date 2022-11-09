import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
  StSearch,
  StTitle,
  InputWrap,
  StInput,
  StRecommendWrap,
  StRecommendTitle,
  StRecommendContent,
} from './Search.style';

const Search = () => {
  return (
    <StSearch>
      <StTitle>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </StTitle>
      <InputWrap>
        <FiSearch />
        <StInput type="search" placeholder="질환명을 입력해 주세요." />
      </InputWrap>
      <StRecommendWrap>
        <StRecommendTitle>추천 검색어</StRecommendTitle>
        <StRecommendContent>
          <FiSearch />
          <span>간세포암</span>
        </StRecommendContent>
        <StRecommendContent>
          <FiSearch />
          <span>구강암</span>
        </StRecommendContent>
      </StRecommendWrap>
    </StSearch>
  );
};

export default Search;
