import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import { Router } from './Router';
import { store } from './store';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
