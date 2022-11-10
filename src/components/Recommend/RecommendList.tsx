import React, { useState, useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { FiSearch } from 'react-icons/fi';
import { keywordState, recommendState, keydownState } from '../../recoil/searchState';
import { IIllness, IllnessList } from '../../types/illness';
import { StRecommendContent } from './Recommend.style';
import fetchSearchData from '../../apis';
import NoRecommendList from './NoRecommendList';
import Loading from './Loading';
import { getSessionStorage, setSessionStorage } from '../../utils/getSessionStorage';

const RecommendList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recommendList, setRecommendList] = useRecoilState(recommendState);

  const keyRef = useRef<HTMLUListElement>(null);

  const index = useRecoilValue(keydownState);
  const indexReset = useResetRecoilState(keydownState);
  const keyword = useRecoilValue(keywordState).toLocaleUpperCase();

  useEffect(() => {
    const cashingData = JSON.parse(getSessionStorage(keyword) || '[]');

    setRecommendList([]);
    indexReset();
    const debounce = setTimeout(() => {
      if (keyword && cashingData.length !== 0) {
        setRecommendList(cashingData);
        setIsLoading(false);
      } else {
        keyword &&
          fetchSearchData(keyword).then((result) => {
            const cashing = JSON.stringify(result);
            setRecommendList(result);
            setSessionStorage(keyword, cashing);
            setIsLoading(false);
          });
      }
    }, 500);
    return () => clearInterval(debounce);
  }, [keyword, setRecommendList, indexReset]);
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
