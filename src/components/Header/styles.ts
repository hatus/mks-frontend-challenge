import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  padding: 28px 65px;

  background-color: ${({ theme }) => theme.colors['base-background-900']};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors['base-white']};
  gap: 6px;
`;

export const LogoPart1 = styled.div`
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
`;

export const LogoPart2 = styled.div`
  font-size: 20px;
  font-weight: 300;
`;
