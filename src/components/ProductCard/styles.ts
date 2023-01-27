import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 218px;
  height: 285px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  background-color: ${({ theme }) => theme.colors['base-white']};

  overflow: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 14px 14px 12px;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 111px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`;

export const Name = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

export const Price = styled.p`
  padding: 4px 7px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors['base-grey-700']};

  color: ${({ theme }) => theme.colors['base-white']};
  font-size: 15px;
  font-weight: 700;
`;

export const Description = styled.div`
  margin-top: 8px;

  font-weight: 300;
  font-size: 10px;

  color: ${({ theme }) => theme.colors['base-grey-900']};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  color: ${({ theme }) => theme.colors['base-white']};
  background-color: ${({ theme }) => theme.colors['base-background-900']};

  font-weight: 600;
  font-size: 14px;
  height: 32px;
  gap: 14px;

  &:hover {
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    background-color: ${({ theme }) => theme.colors['base-background-700']};
  }
`;
