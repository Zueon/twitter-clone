import React from 'react';
import { useState, useEffect } from 'react';
import AppRouter from './AppRouter';
import { auth } from '../fbase';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'initializing'}
      <footer>&copy; {new Date().getFullYear()} Jwitter</footer>
    </>
  );
};

export default App;
