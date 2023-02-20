import styles from './Signup.module.css';

import Navbar from 'components/navbar/Navbar';
import { Box, Button, TextField } from '@mui/material';

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className={styles['content']}>
        <h1>Signup</h1>
        <Box component="form" sx={{ '& > :not(style)': { mb: 1, width: '100%' } }}>
          <TextField id="email" label="Email" type="email" variant="outlined" />
          <TextField id="password" label="Password" type="password" variant="outlined" />
          <TextField id="first-name" label="First Name" type="text" variant="outlined" />
          <TextField id="last-name" label="Last Name" type="text" variant="outlined" />
        </Box>
        <div className="mt1">
          <Button variant="contained" fullWidth>
            Sign up
          </Button>
        </div>
      </div>
    </>
  );
};

export default Signup;
