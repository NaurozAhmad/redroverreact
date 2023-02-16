import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import ButtonStyles from 'button.module.css';
import { Resort } from 'interfaces';
import { useState } from 'react';

const Amenities = (props: { resort: Resort | undefined }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [amenities] = useState(props.resort?.amenities.slice(0, 8));

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <section>
        <h2>Amenities</h2>
        <ul>
          {amenities?.map((amenity: string) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
        <div className="action-container flex flex-center p1">
          <button
            onClick={openDialog}
            className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-secondary']} cursor-pointer`}
          >
            Show all {props.resort?.amenitiesCount} amenities
          </button>
        </div>

        <Dialog open={dialogOpen} maxWidth="sm" fullWidth>
          <DialogTitle>
            Amenities
            <IconButton onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <FontAwesomeIcon icon="times" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Typography variant="body1" component="div">
              <ul style={{ paddingLeft: '1.5rem', marginTop: 0 }}>
                {props.resort?.amenities.map((amenity: string) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>
            </Typography>
          </DialogContent>
        </Dialog>
        <hr />
      </section>
    </>
  );
};

export default Amenities;
