import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  width: 90px;
  height: 45px;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors['base-white']};
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors['base-white-light']};
    transition: 0.2s background-color;
  }
`;

export const NumberProductInCart = styled.div`
  color: ${({ theme }) => theme.colors['base-black-900']};
  font-weight: 700;
  font-size: 18px;
`;
