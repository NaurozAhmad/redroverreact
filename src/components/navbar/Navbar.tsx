import styles from './Navbar.module.css';

import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  return (
    <header className={styles['navbar']}>
      <span className={styles['title']}>Red Rover</span>
      <Button variant="text" className={styles['button']}>
        <FontAwesomeIcon className={styles['large-icon']} icon="ellipsis" />
      </Button>
    </header>
  );
};

export default Navbar;
