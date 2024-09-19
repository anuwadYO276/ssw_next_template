"use client";
import { useEffect, useState } from 'react';
import liff from '@line/liff';

export default function LiffComponent() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeLiff = async () => {
      try {
        // Initialize LIFF with your LIFF ID
        await liff.init({ liffId: '2006020208-6YYRzxrm' });

        // Check if the user is logged in
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          const profile = await liff.getProfile();
          setProfile(profile);
        }
      } catch (err) {
        console.error('LIFF Initialization Failed', err);
        setError(err.toString());
      }
    };

    initializeLiff();
  }, []);

  return (
    <div>
      <h1>LINE LIFF Example</h1>
      {error ? (
        <div>Error: {error}</div>
      ) : profile ? (
        <div>
          <p>Name: {profile.displayName}</p>
          <p>User ID: {profile.userId}</p>
          <img src={profile.pictureUrl} alt="Profile" width="100" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
