import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from './components/themes/Theme';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

//Bisher ungenutzte Importe:

//import { ApolloClient, InMemoryCache } from '@apollo/client';
//  const client = new ApolloClient({
//    uri: 'https://48p1r2roz4.sse.codesandbox.io',
//    cache: new InMemoryCache()
//});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
