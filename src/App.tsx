import './App.css';
import React from 'react';

import { initializeApp } from 'firebase/app';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Shared/theme';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ExploreSideBar from './Components/ExploreSideBar';
import GlobalStyle from './Shared/globalStyles';
import Profile from './Pages/Profile';
import Bookmarks from './Pages/Bookmarks';
// import { Helmet } from 'react-helmet-async';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';

initializeApp({
  apiKey: 'AIzaSyBBa-SKfiISkLOpmyMrgrW06xOlG4yXP2E',
  authDomain: 'twitter-clone-93201.firebaseapp.com',
  projectId: 'twitter-clone-93201',
  storageBucket: 'twitter-clone-93201.appspot.com',
  messagingSenderId: '136733951296',
  appId: '1:136733951296:web:f1b615912bac33c47c26a5',
  measurementId: 'G-NPLMV9GV01',
});

// const auth = getAuth();
// const firestore = getFirestore();

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <MainDiv>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ExploreSideBar />
      </MainDiv>
    </ThemeProvider>
  );
};

export default App;

const MainDiv = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: yellow;
  width: 100vw;
  height: 100vh;
`;
