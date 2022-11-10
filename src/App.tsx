import './App.css';
import React from 'react';

import { initializeApp } from 'firebase/app';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './Shared/theme';
import NavigationBar from './Components/NavigationBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ExploreSideBar from './Components/ExploreSideBar';
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
      <ThemeProvider theme={ lightTheme }>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}/> 
        </Routes>
        <ExploreSideBar/>
      </ThemeProvider>
  );
}

export default App;
