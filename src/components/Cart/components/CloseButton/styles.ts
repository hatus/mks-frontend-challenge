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

  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['base-black-900']};
  font-size: ${({ size }) => size * 0.6}px;
  font-weight: 400;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors['base-black-700']};
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
