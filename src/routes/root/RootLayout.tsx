import { Outlet } from 'react-router-dom';

import { AuthContext } from 'AuthContext';
import { useState } from 'react';

const RootLayout = () => {
  const user = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  const [userData, setUserData] = useState(user && token ? { user: JSON.parse(user), token } : false);

  return (
    <>
      <div>
        <AuthContext.Provider value={{ userData, setUserData }}>
          <Outlet />
        </AuthContext.Provider>
      </div>
    </>
  );
};

export default RootLayout;
