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
  const [recommendList, setRecommendList] = useRecoilState(recommendState);

  const keyRef = useRef<HTMLUListElement>(null);

  const keyword = useRecoilValue(keywordState);
  const index = useRecoilValue(keydownState);

  useEffect(() => {
    setRecommendList([]); // 이 과정이 없으면 이전 추천 목록이 남아있어서 로딩중 아래에 데이터가 나와있음
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
  }, [keyword, setRecommendList]);

  return (
    <div>
      {isLoading && <Loading />}
      <ul ref={keyRef}>
        {recommendList &&
          recommendList.map((recommend: IIllness, idx: number) => {
            const prevKeword = recommend.sickNm.split(keyword)[0];
            const nextKeword = recommend.sickNm.split(keyword)[1];
            return (
              <StRecommendContent key={recommend.sickCd} isFocus={index === idx}>
                <FiSearch />
                <p>
                  {prevKeword}
                  <span>{keyword}</span>
                  {nextKeword}
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
