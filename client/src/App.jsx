import React from 'react';
import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import TicketsPage from './components/TicketsPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path="/" element={<TicketsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
