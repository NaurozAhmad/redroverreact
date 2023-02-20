import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';

import ButtonStyles from 'button.module.css';
import { NearbyAttraction, Resort } from 'interfaces';
import { useState } from 'react';

const NearbyAttractions = (props: { resort: Resort | undefined }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <section>
        <h2>Nearby attractions</h2>
        <div className="cards-container">
          {props.resort?.nearbyAttractions.map((attraction: NearbyAttraction, index: number) => (
            <div key={index}>
              <Card className="flat-card small-card mb1">
                <CardActionArea>
                  <CardMedia component="img" height="200" image={attraction.image} alt={props.resort?.name} />
                  <CardContent>
                    <h3 className="text-center">{attraction.name}</h3>
                    <div>{attraction.description}</div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-center p1">
          <button
            onClick={openDialog}
            className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-secondary']} cursor-pointer`}
          >
            Show all {props.resort?.nearbyAttractionsCount} attractions
          </button>
        </div>
        <Dialog open={dialogOpen} maxWidth="sm" fullWidth>
          <DialogTitle>
            Nearby Attractions
            <IconButton onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <FontAwesomeIcon icon="times" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {props.resort?.nearbyAttractions.map((attraction: NearbyAttraction, index: number) => (
              <div key={index}>
                <Card className="flat-card small-card mb1">
                  <CardActionArea>
                    <CardMedia component="img" height="200" image={attraction.image} alt={props.resort?.name} />
                    <CardContent>
                      <h3 className="text-center">{attraction.name}</h3>
                      <div>{attraction.description}</div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default NearbyAttractions;
