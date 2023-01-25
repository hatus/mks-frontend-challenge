import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 38px;
  height: 38px;
  border-radius: 50%;

  color: #fff;
  background-color: #000;
  font-size: 28px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    background-color: #191919;
    transition: background-color 0.2s;
  }
`;
