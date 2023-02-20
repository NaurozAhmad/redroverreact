import styles from './Login.module.css';

import Navbar from 'components/navbar/Navbar';
import { Box, Button, TextField } from '@mui/material';

const Login = () => {
  return (
    <>
      <Navbar />
      <div className={styles['content']}>
        <h1>Login</h1>
        <Box component="form" sx={{ '& > :not(style)': { mb: 1, width: '100%' } }}>
          <TextField id="email" label="Email" type="email" variant="outlined" />
          <TextField id="password" label="Password" type="password" variant="outlined" />
        </Box>
        <div className="mt1">
          <Button variant="contained" fullWidth>
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
