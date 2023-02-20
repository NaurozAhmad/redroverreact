import styles from './Signup.module.css';

import Navbar from 'components/navbar/Navbar';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const doSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('form data', formData);
    const postData = Object.fromEntries(formData);
    const signupInfo = {
      email: postData['email'],
      password: postData['password'],
      firstName: postData['first-name'],
      lastName: postData['last-name'],
    };
    console.log('signing up', signupInfo);
    const response = await axios.post('http://localhost:4000/signup', signupInfo);
    console.log('got response', response);
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className={styles['content']}>
        <h1>Signup</h1>
        <Box component="form" sx={{ '& > :not(style)': { mb: 1, width: '100%' } }} onSubmit={doSignup}>
          <TextField id="email" name="email" label="Email" type="email" variant="outlined" />
          <TextField id="password" name="password" label="Password" type="password" variant="outlined" />
          <TextField id="first-name" name="first-name" label="First Name" type="text" variant="outlined" />
          <TextField id="last-name" name="last-name" label="Last Name" type="text" variant="outlined" />
          <div className="mt1">
            <Button variant="contained" fullWidth type="submit">
              Sign up
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Signup;
