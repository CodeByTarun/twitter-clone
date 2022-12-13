/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import React from 'react';
import { initializeApp } from 'firebase/app';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Shared/theme';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './Shared/globalStyles';
import { devices } from './Shared/globalConstants';
import { Home, Bookmarks, Profile, Follow, Error, TweetModal } from './Pages';
import { ExploreSideBar, NavigationBar } from './Components';
import EditProfileModal from './Pages/Modals/EditProfileModal';
import ThemeModal from './Pages/Modals/ThemeModal';
// import { Helmet } from 'react-helmet-async';
// import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { useAuthState } from 'react-firebase-hooks/auth';

// const firestore = getFirestore();

const App: React.FC<{}> = () => {
  const location = useLocation();
  const background: Location | undefined = location.state?.background;

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Container>
        <NavigationBar />
        <Routes location={background !== null ? background : location}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="*" element={<Error />} />
          <Route path="/profile/following" element={<Follow />} />
          <Route path="/profile/followers" element={<Follow />} />
        </Routes>

        {background != null && (
          <Routes>
            <Route path="/compose/tweet" element={<TweetModal />} />
            <Route path="/theme" element={<ThemeModal />} />
            <Route path="/settings/profile" element={<EditProfileModal />} />
          </Routes>
        )}
        <ExploreSideBar />
      </Container>
    </ThemeProvider>
  );
};

export default App;

const Container = styled.div`
  display: grid;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;

  @media only screen and (${devices.tablet}) {
    grid-template-columns: auto minmax(auto, 600px);
    max-width: 705px;
  }

  @media only screen and (${devices.laptop}) {
    grid-template-columns: auto 600px minmax(1.25rem, 1.75rem) minmax(
        290px,
        350px
      );
  }

  @media only screen and (${devices.desktop}) {
    max-width: 1300px;
  }
`;
