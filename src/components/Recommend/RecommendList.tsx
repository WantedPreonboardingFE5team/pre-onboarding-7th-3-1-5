import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import { keywordState } from '../../recoil/keywordState';
import { IIllness } from '../../types/illness';
import { StRecommendContent } from './Recommend.style';
import fetchSearchData from '../../apis';
import NoRecommendList from './NoRecommendList';
import Loading from './Loading';

const RecommendList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recommendList, setRecommendList] = useState<IIllness[]>([]);

  const keyword = useRecoilValue(keywordState);
  // TODO recommendList 개수 제한하기 (10개?)
  // TODO 키보드로 추천 검색어 이동가능하게 하기
  useEffect(() => {
    setRecommendList([]); // 이 과정이 없으면 이전 추천 목록이 남아있어서 로딩중 아래에 데이터가 나와있음
    // api 호출이 여러번 되는 것을 막기위해 setTimeout을 사용하여 debounce 처리
    const debounce = setTimeout(
      () =>
        keyword &&
        fetchSearchData(keyword).then((result) => {
          setRecommendList(result);
          setIsLoading(false);
        }),
      500,
    );
    return () => clearInterval(debounce);
  }, [keyword]);

  return (
    <>
      {isLoading && <Loading />}
      {recommendList &&
        recommendList.map((recommend: IIllness) => {
          const prevKeword = recommend.sickNm.split(keyword)[0];
          const nextKeword = recommend.sickNm.split(keyword)[1];

          return (
            <StRecommendContent key={recommend.sickCd}>
              <FiSearch />
              <p>
                {prevKeword}
                <span>{keyword}</span>
                {nextKeword}
              </p>
            </StRecommendContent>
          );
        })}
      {!isLoading && recommendList.length === 0 && <NoRecommendList />}
    </>
  );
};

export default RecommendList;
