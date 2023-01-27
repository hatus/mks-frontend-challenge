import styled from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: auto;

  ${({ isOpen }) =>
    (isOpen &&
      `
      right: 0;
      transition: .4s right;
      `) ||
    `
      right: -486px;
      transition: .4s right;
    `}

  height: 100%;
  width: 486px;

  background-color: ${({ theme }) => theme.colors['base-background-900']};
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 22px 0 47px;
`;

export const TitleCart = styled.p`
  width: 180px;
  font-size: 27px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-white']}; ;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  margin: 70px 60px 36px 47px;
  height: 100%;
`;

export const Footer = styled.div`
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 700;
  font-size: 28px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 42px 47px;
`;

export const TotalLabel = styled.p``;

export const TotalValue = styled.p``;

export const FinishButton = styled.div`
  height: 97px;
  padding: 39px 0;
  background-color: ${({ theme }) => theme.colors['base-black-900']};
  text-align: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-black-700']};
    transition: 0.1s background-color;
  }
`;
