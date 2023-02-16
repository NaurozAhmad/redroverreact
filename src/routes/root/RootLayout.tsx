import { Outlet } from 'react-router-dom';
// import styles from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
