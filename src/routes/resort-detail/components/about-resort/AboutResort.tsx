import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './AboutResort.module.css';
import ButtonStyles from 'button.module.css';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { Resort } from 'interfaces';

const AboutResort = (props: { resort: Resort | undefined }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const description = props.resort?.description.replace(/<br \/>/g, '<br /><br />') || '';

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };
  return (
    <>
      <section>
        <div className="mt2">
          <p className={styles['description']}>{props.resort?.description}</p>
        </div>
        <button
          onClick={openDialog}
          className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-tertiary']} cursor-pointer`}
        >
          Show more
          <FontAwesomeIcon icon="chevron-right" className="pl05" />
        </button>
        <div className="action-container flex flex-center p1 mb2">
          <a
            href={`tel:' + ${props.resort?.phone}`}
            className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-secondary']} cursor-pointer`}
          >
            Contact Resort
          </a>
        </div>
        <Dialog open={dialogOpen} maxWidth="sm" fullWidth>
          <DialogTitle>
            {props.resort?.name}
            <IconButton onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <FontAwesomeIcon icon="times" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" component="div" dangerouslySetInnerHTML={{ __html: description }} />
          </DialogContent>
        </Dialog>
        <hr />
      </section>
    </>
  );
};

export default AboutResort;
