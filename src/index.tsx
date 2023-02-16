import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { createTheme } from '@mui/material/styles';

import Error from './routes/Error/Error';
import RootLayout from './routes/root/RootLayout';
import Explore from './routes/explore/Explore';
import ResortDetail from './routes/resort-detail/ResortDetail';

library.add(fas, far);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Explore />,
      },
      {
        path: '/resort-detail/:id',
        element: <ResortDetail />
      }
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: '#DF445D',
      light: '#4B4B4B',
      dark: '#000000',
    },
  },
  typography: {
    h1: {
      fontSize: 30,
    },
    h2: {
      fontSize: 25,
    },
    h3: {
      fontSize: 21
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 11,
    }
  }
});

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
