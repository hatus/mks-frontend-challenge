import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-size: 12px;
  font-weight: 400;

  background-color: ${({ theme }) => theme.colors['base-grey-100']};

  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 8px 0;
`;
