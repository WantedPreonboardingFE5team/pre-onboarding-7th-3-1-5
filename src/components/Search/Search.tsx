import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import { keywordState, recommendState, keydownState } from '../../recoil/searchState';
import Recommend from '../Recommend/Recommend';
import { StSearch, StTitle, InputWrap, StInput } from './Search.style';

const KEY_DOWN = 'ArrowDown';
const KEY_UP = 'ArrowUp';

const Search = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setIndex = useSetRecoilState(keydownState);
  const recommendListLength = useRecoilValue(recommendState).length;

  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const keyboardHandle = (e: React.KeyboardEvent) => {
    // 범위 지정을 해주는 이유는 추천 검색어창을 넘어가서 index가 무한대로 커지거나 작아질 수 있기 때문
    if (e.key === KEY_DOWN) {
      setIndex((prev) => (prev < recommendListLength - 1 ? prev + 1 : prev));
    }
    if (e.key === KEY_UP) {
      setIndex((prev) => (prev > -1 ? prev - 1 : prev));
    }
  };

  return (
    <StSearch>
      <StTitle>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </StTitle>
      <InputWrap>
        <FiSearch />
        <StInput
          type="search"
          placeholder="질환명을 입력해 주세요."
          value={keyword}
          onChange={onChangeHandle}
          onKeyDown={keyboardHandle}
        />
      </InputWrap>
      {keyword && <Recommend />}
    </StSearch>
  );
};

export default Search;
