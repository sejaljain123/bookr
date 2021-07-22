import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';

const home = () => {
  const { authUser, loading, signOut } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push('/');
  }, [authUser, loading]);

  return (
    <div>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
};

export default home;
