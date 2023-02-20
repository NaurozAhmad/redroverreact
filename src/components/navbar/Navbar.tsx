import styles from './Navbar.module.css';

import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuItem } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from 'AuthContext';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { userData, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const signup = () => {
    setAnchorEl(null);
    navigate('/signup');
  };

  const login = () => {
    setAnchorEl(null);
    navigate('/login');
  };

  const logout = () => {
    setAnchorEl(null);
    setUserData(false);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <header className={styles['navbar']}>
      <span className={styles['title']}>Red Rover</span>
      <Button variant="text" className={styles['button']} onClick={handleClick}>
        <FontAwesomeIcon className={styles['large-icon']} icon="ellipsis" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to="/" className="no-link">
          <MenuItem>Explore Resorts</MenuItem>
        </Link>
        {userData ? <MenuItem onClick={logout}>Log out</MenuItem> : <MenuItem onClick={login}>Log in</MenuItem>}
        {userData ? null : <MenuItem onClick={signup}>Sign up</MenuItem>}
      </Menu>
    </header>
  );
};

export default Navbar;
