import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`;

export const Label = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: #000;
`;

export const SelectorGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.3px solid #bfbfbf;
  border-radius: 4px;
`;

export const SelectorButton = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  padding: 4px 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectorQty = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 8px;
  padding: 0 7px;
  color: #000;

  width: 16px;
  height: 12px;

  border-left: 0.2px solid #bfbfbf;
  border-right: 0.2px solid #bfbfbf;
`;
