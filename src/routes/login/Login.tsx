import styles from './Login.module.css';

import Navbar from 'components/navbar/Navbar';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from 'AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);

  const doLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const postData = Object.fromEntries(new FormData(e.currentTarget));
    const response = await axios.post('http://localhost:4000/login', {
      email: postData['email'],
      password: postData['password'],
    });
    console.log('logged in', response);
    setUserData({ user: response.data.user, token: response.data.token });
    localStorage.setItem('user', JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.token);
    navigate('/');
  };
  return (
    <>
      <Navbar />
      <div className={styles['content']}>
        <h1>Login</h1>
        <Box component="form" sx={{ '& > :not(style)': { mb: 1, width: '100%' } }} onSubmit={doLogin}>
          <TextField id="email" name="email" label="Email" type="email" variant="outlined" />
          <TextField id="password" name="password" label="Password" type="password" variant="outlined" />
          <div className="mt1">
            <Button variant="contained" fullWidth type="submit">
              Log in
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Login;
