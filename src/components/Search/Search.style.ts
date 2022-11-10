import styled from 'styled-components';

export const StSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
`;

export const StTitle = styled.p`
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  /* 자간, 행간 조절 */
  letter-spacing: 0.5px;
  line-height: 40px;

  margin-bottom: 40px;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  width: 700px;
  padding: 20px 20px;

  border: 2px solid white;
  border-radius: 20px;
  background-color: white;

  /* div 클릭 시 테두리 생기도록 focus 설정 */
  :focus-within {
    border: 2px solid #1976d2;
  }
`;

export const StInput = styled.input`
  width: 100%;
  padding-left: 10px;

  outline: none;
  border: none;

  font-size: 18px;
`;
