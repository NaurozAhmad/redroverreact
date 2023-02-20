import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Reviews.module.css';
import ButtonStyles from 'styles/button.module.css';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Resort, Review } from 'interfaces';

const Reviews = (props: { resort: Resort | undefined; openReviews: Boolean; onReviewsClose: any }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    if (props.openReviews) {
      openDialog();
      props.onReviewsClose();
    }
  }, [props, props.openReviews]);

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <section>
        <h2 className="mb05">
          <FontAwesomeIcon icon="star" className={'pr05'} />
          {props.resort?.rating} . {props.resort?.reviews.length} reviews
        </h2>
        <div className={styles['slider']}>
          {props.resort?.reviews.map((review: Review, index: number) => (
            <div key={index} className={styles['review']}>
              <div className={styles['review-header']}>
                <div className={styles['avatar']}></div>
                <div className="pl1">
                  <div className={`bold ${styles['review-username']}`}>{review.reviewBy}</div>
                  <Typography variant="body2" component="span">
                    {review.dateCreated}
                  </Typography>
                </div>
              </div>
              <div className={styles['review-body']}>{review.review}</div>
            </div>
          ))}
        </div>
        <div className="action-container flex flex-center p1">
          <button
            onClick={openDialog}
            className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-secondary']} cursor-pointer`}
          >
            Show all {props.resort?.reviewsCount} reviews
          </button>
        </div>

        <Dialog open={dialogOpen} maxWidth="sm" fullWidth>
          <DialogTitle>
            Reviews
            <IconButton onClick={closeDialog} sx={{ position: 'absolute', right: 8, top: 8 }}>
              <FontAwesomeIcon icon="times" />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            {props.resort?.reviews.map((review: Review, index: number) => (
              <div key={index}>
                <div className={`${styles['review-header']}`}>
                  <div className={styles['avatar']}></div>
                  <div className="pl1">
                    <div className={`bold ${styles['review-username']}`}>{review.reviewBy}</div>
                    <Typography variant="body2" component="span">
                      {review.dateCreated}
                    </Typography>
                  </div>
                </div>
                <div className="mb2">
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </DialogContent>
        </Dialog>
      </section>
      <hr />
    </>
  );
};

export default Reviews;
