import React, { useEffect, useState } from 'react';
import { IIllness } from '../../types/illness';
import fetchSearchData from '../../apis';
import { StRecommend, StRecommendTitle } from './Recommend.style';
import Loading from './Loading';
import NoRecommendList from './NoRecommendList';
import RecommendList from './RecommendList';

const Recommend = ({ keyword }: { keyword: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendList, setRecommendList] = useState<IIllness[]>([]);

  // TODO recommendList 개수 제한하기 (10개?)
  // TODO 키보드로 추천 검색어 이동가능하게 하기
  useEffect(() => {
    setIsLoading(true);
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

  // TODO context api 또는 redux, recoil 등을 사용하면 분리 가능 (로컬캐싱 구현 필요)
  const RecommendListComp = recommendList.map((recommend: IIllness) => {
    return (
      <RecommendList key={recommend.sickCd} sickCd={recommend.sickCd} sickNm={recommend.sickNm} keyword={keyword} />
    );
  });

  return (
    <StRecommend>
      <StRecommendTitle>추천 검색어</StRecommendTitle>
      {isLoading && <Loading />}
      {RecommendListComp}
      {!isLoading && RecommendList.length === 0 && <NoRecommendList />}
    </StRecommend>
  );
};

export default Recommend;
