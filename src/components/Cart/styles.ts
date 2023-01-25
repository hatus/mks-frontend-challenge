import styled from 'styled-components';

interface ContainerProps extends HTMLDivElement {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  right: 0;
  background-color: #0f52ba;
  height: 100%;
  width: 486px;
  z-index: 1;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: 0.2s;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 22px 0 47px;
`;

export const TitleCart = styled.p`
  font-size: 27px;
  font-weight: 700;
  color: #fff;
`;
