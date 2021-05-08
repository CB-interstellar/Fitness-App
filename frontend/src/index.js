import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import Theme from './components/themes/Theme';


import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


import { ApolloProvider } from '@apollo/client/react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
  const client = new ApolloClient({
    uri: 'https://q1fekg12.api.sanity.io/v1/graphql/production/default',
    cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
     </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
