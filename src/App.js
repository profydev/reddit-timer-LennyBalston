import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

import Container from './components/Container';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
