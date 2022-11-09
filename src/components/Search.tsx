import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { StSearch, StTitle, InputWrap, StInput } from './Search.style';

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
    </StSearch>
  );
};

export default Search;
