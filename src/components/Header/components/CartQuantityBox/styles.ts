import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 90px;
  height: 45px;
  background-color: #fff;
  gap: 16px;

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
    transition: 0.2s background-color;
  }
`;

export const NumberProductInCart = styled.div`
  color: #000;
  font-weight: 700;
  font-size: 18px;
`;
