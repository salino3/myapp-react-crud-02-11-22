import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FirstPage from '../pages/FirstPage';
import PageList from '../pages/PageList';
import PageNotFound from '../components/PageNotFound';
import SecondPage from '../pages/SecondPage';
import NavBar from '../components/NavBar';
import PageCard from '../pages/PageCard';

const AppRouter = () => {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PageList />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/pagecard" element={<PageCard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter