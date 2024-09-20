import { useEffect, useState } from 'react';
import liff from '@line/liff';

export default function LiffComponent({ setUserId }) {  // รับฟังก์ชัน setUserId จาก props
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
          setUserId(profile.userId);  // ส่ง userId ไปยัง parent
        }
      } catch (err) {
        console.error('LIFF Initialization Failed', err);
        setError(err.toString());
      }
    };

    initializeLiff();
  }, [setUserId]);  // เพิ่ม dependency ของ setUserId

  const handleLogout = () => {
    liff.logout();
    window.location.reload(); // Refresh the page to ensure state is updated after logout
  };

  return (
    <>
      {error ? (
        <div>Error: {error}</div>
      ) : profile ? (
        <>
          <input type="hidden" value={profile.userId} id="userId" name="userId" readOnly />
          <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
