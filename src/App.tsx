import './global.css';
import styles from './App.module.css';

import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  background-color: #333;
`;

function App() {
  return (
    <Content>
      <h1>Ola mundo</h1>
    </Content>
  );
}

export default App;
