import styled from 'styled-components';

export const StRecommend = styled.div`
  width: 400px;

  margin-top: 5px;
  padding: 20px 20px;

  border-radius: 10px;
  background-color: white;
`;

export const StRecommendTitle = styled.p`
  font-size: 12px;
  color: gray;
`;

export const StRecommendContent = styled.div`
  display: flex;
  align-items: center;

  margin-top: 20px;

  svg {
    margin-right: 10px;
  }

  span {
    line-height: 5px;
  }
`;

export const StLoading = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 10px;
`;

export const StNoRecommendList = styled.div`
  margin-top: 10px;
`;
