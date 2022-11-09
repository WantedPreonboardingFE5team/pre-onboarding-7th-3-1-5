import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IIllness } from '../../types/illness';
import fetchSearchData from '../../apis';
import { StRecommend, StRecommendTitle, StRecommendContent } from './Recommend.style';
import Loading from './Loading';
import NoRecommendList from './NoRecommendList';

const Recommend = ({ keyword }: { keyword: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommendList, setRecommendList] = useState<IIllness[]>([]);

  // TODO input 값 포함하는 글자 볼드처리 하기
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
  const RecommendList = recommendList.map((recommend: IIllness) => {
    return (
      <StRecommendContent key={recommend.sickCd}>
        <FiSearch />
        <span>{recommend.sickNm}</span>
      </StRecommendContent>
    );
  });

  return (
    <StRecommend>
      <StRecommendTitle>추천 검색어</StRecommendTitle>
      {isLoading && <Loading />}
      {RecommendList}
      {!isLoading && RecommendList.length === 0 && <NoRecommendList />}
    </StRecommend>
  );
};

export default Recommend;
