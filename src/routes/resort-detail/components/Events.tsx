import ButtonStyles from 'button.module.css';

import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

const Events = (props: { resort: any }) => {
  const openEventsModal = () => {
    console.log('open events modal');
  }
  return (
    <>
      <section>
        <h2 className="mb05">Resort events</h2>
        <div className="cards-container">
          {props.resort.events.map((event: any) => (
            <Card className={'flat-card small-card mb1'}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={event.images[0]} alt={props.resort.name} />
                <CardContent>
                  <h3 className={'text-center'}>{event.name}</h3>
                  <div>{event.description}</div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </div>
        <div className={'action-container flex flex-center p1'}>
          <button
            onClick={openEventsModal}
            className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-secondary']} cursor-pointer`}
          >
            Show all {props.resort.nearbyAttractionsCount} attractions
          </button>
        </div>
      </section>
    </>
  );
};

export default Events;
