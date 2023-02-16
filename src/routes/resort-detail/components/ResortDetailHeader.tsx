import styles from '../ResortDetail.module.css';
import buttonStyles from '../../../button.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { useState } from 'react';
import { Resort } from 'interfaces';

const ResortDetailHeader = (props: { resort: Resort | undefined }) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  const goBack = () => {
    navigate(-1);
  };

  const closeDialog = () => {
    console.log('closing dialog');
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <button
        className={`${buttonStyles['r-button-circle']}`}
        onClick={goBack}
        style={{ position: 'absolute', top: 8, left: 8 }}
      >
        <FontAwesomeIcon icon="angle-left" />
      </button>

      <div
        className={styles['image-container']}
        style={{ backgroundImage: `url(${props.resort?.images[0]})` }}
        onClick={openDialog}
      >
        <div className={`${styles['hero-buttons-container']}`}>
          {/* <button className={`${buttonStyles['r-button-circle']} mlauto`}>
          <FontAwesomeIcon icon="heart" />
        </button>
        <button className={`${buttonStyles['r-button-circle']} ml1`}>
          <FontAwesomeIcon icon="share-nodes" />
        </button> */}
        </div>
        <span className={styles['image-count']}>{props.resort?.images.length} images</span>
      </div>
      <Dialog open={dialogOpen} maxWidth="sm" fullWidth>
        <DialogTitle>
          {props.resort?.name}
          <IconButton onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
            <FontAwesomeIcon icon="times" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {props.resort?.images.map((image: string, index: number) => (
            <div key={index}>
              <img src={image} alt={props.resort?.name} style={{width: '100%'}}/>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResortDetailHeader;
