import styled from 'styled-components';

interface ContainerProps {
  size: number;
  absolute: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;

  color: #fff;
  background-color: #000;
  font-size: ${({ size }) => size * 0.6}px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    background-color: #191919;
    transition: background-color 0.2s;
  }

  ${({ absolute }) =>
    absolute &&
    `
      position: absolute;
      top: -4px;
      right: -4px;
  `}
`;
