import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import { keywordState, recommendState, keydownState } from '../../recoil/searchState';
import { IIllness } from '../../types/illness';
import { StRecommendContent } from './Recommend.style';
import fetchSearchData from '../../apis';
import NoRecommendList from './NoRecommendList';
import Loading from './Loading';

const RecommendList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [index, setIndex] = useRecoilState(keydownState);
  const [recommendList, setRecommendList] = useRecoilState(recommendState);

  const keyRef = useRef<HTMLUListElement>(null);

  const keyword = useRecoilValue(keywordState).toLocaleUpperCase();

  useEffect(() => {
    setRecommendList([]); // 이 과정이 없으면 이전 추천 목록이 남아있어서 로딩중 아래에 데이터가 나와있음
    setIndex(-1); // 포커싱이 검색창으로 돌아가야하기 때문, 설정 안한다면 이전 index에 머물러서 처음 검색했는데 추천 검색어 중간에 포커싱 되어있을 수 있다
    // api 호출이 여러번 되는 것을 막기위해 setTimeout을 사용하여 debounce 처리
    const debounce = setTimeout(
      () =>
        keyword &&
        fetchSearchData(keyword).then((result) => {
          const sliceData = result.slice(0, 10);
          setRecommendList(sliceData);
          setIsLoading(false);
        }),
      500,
    );
    return () => clearInterval(debounce);
  }, [keyword, setRecommendList, setIndex]);

  return (
    <div>
      {isLoading && <Loading />}
      <ul ref={keyRef}>
        {recommendList &&
          recommendList.map((recommend: IIllness, idx: number) => {
            const prevKeyword = recommend.sickNm.split(keyword)[0];
            const nextKeyword = recommend.sickNm.split(keyword)[1];
            return (
              <StRecommendContent key={recommend.sickCd} isFocus={index === idx}>
                <FiSearch />
                <p>
                  {prevKeyword}
                  <span>{keyword}</span>
                  {nextKeyword}
                </p>
              </StRecommendContent>
            );
          })}
      </ul>
      {!isLoading && recommendList.length === 0 && <NoRecommendList />}
    </div>
  );
};

export default RecommendList;
