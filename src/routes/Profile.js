import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../fbase';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  let navigate = useNavigate();

  const onLogOutClick = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
