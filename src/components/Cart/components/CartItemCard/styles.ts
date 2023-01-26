import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 379px;
  height: 95px;
  border-radius: 8px;
  padding: 0 15px 0 23px;

  background-color: #fff;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 46px;
`;

export const ProductName = styled.p`
  width: 113px;
  font-weight: 400;
  font-size: 13px;
  color: #2c2c2c;
`;

export const ProductPrice = styled.div`
  width: 65px;
  font-weight: 700;
  font-size: 14px;
  color: #000;
`;
