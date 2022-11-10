import styled from 'styled-components';

export const StRecommend = styled.div`
  width: 700px;
  overflow-y: scroll;
  max-height: 400px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
    margin-top: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  margin-top: 5px;
  padding: 20px 20px;

  border-radius: 15px;
  background-color: white;
`;

export const StRecommendTitle = styled.p`
  font-size: 12px;
  color: gray;

  margin: 10px 0;
`;

export const StRecommendContent = styled.li<{ isFocus?: boolean }>`
  display: flex;
  align-items: center;

  padding: 20px 0;

  svg {
    margin: 0 10px;
  }

  p {
    line-height: 1.5;
  }

  span {
    font-weight: 700;
  }

  border-radius: 10px;
  background-color: ${(props) => props.isFocus && '#dbdbdb'};
`;

export const StLoading = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`;

export const StNoRecommendList = styled.div`
  margin-top: 10px;
`;
