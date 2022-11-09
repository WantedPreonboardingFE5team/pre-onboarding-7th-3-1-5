import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Recommend from '../Recommend/Recommend';
import { StSearch, StTitle, InputWrap, StInput } from './Search.style';

const Search = () => {
  const [keyword, setKeyword] = useState<string>('');
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <StSearch>
      <StTitle>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </StTitle>
      <InputWrap>
        <FiSearch />
        <StInput type="search" placeholder="질환명을 입력해 주세요." value={keyword} onChange={onChangeHandle} />
      </InputWrap>
      {keyword && <Recommend keyword={keyword} />}
    </StSearch>
  );
};

export default Search;
