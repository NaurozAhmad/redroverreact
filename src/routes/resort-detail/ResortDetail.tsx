import { useParams } from 'react-router-dom';

import { ApolloError, useQuery } from '@apollo/client';

import styles from './ResortDetail.module.css';
import ButtonStyles from 'button.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GET_RESORT from 'gql/resortFull';
import ResortDetailHeader from './components/ResortDetailHeader';
import Accommodation from './components/Accommodation';
import Amenities from './components/Amenities';
import Reviews from './components/reviews/Reviews';
import NearbyAttractions from './components/attractions/NearbyAttractions';
import AboutResort from './components/about-resort/AboutResort';
import { useState } from 'react';
import { Resort } from 'interfaces';
import { Link } from 'react-router-dom';

const ResortDetail = () => {
  const { id } = useParams();
  const [openReviews, setOpenReviews] = useState(false);

  const {
    loading,
    error,
    data,
  }: { loading: Boolean; error?: ApolloError | undefined; data: { resort: Resort } | undefined } = useQuery(
    GET_RESORT,
    {
      variables: { id },
    }
  );

  const openReviewsModal = () => {
    setOpenReviews(true);
  };

  const onReviewsClose = () => {
    setOpenReviews(false);
  };

  console.log('resort data', data?.resort);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error! {error.message}</div>;

  return (
    <>
      <div>
        <ResortDetailHeader resort={data?.resort} />
        <div className="p1">
          <div>
            <h1>Sycamore Lodge Resort</h1>
            <div className={styles['resort-basic-info']}>
              <p onClick={openReviewsModal}>
                <FontAwesomeIcon icon="star" /> <span>{data?.resort.rating}</span> .{' '}
                <span className="underline">{data?.resort.reviewsCount} reviews</span>
              </p>
              <p>
                {data?.resort.address.street}, {data?.resort.address.city}, {data?.resort.address.state}
              </p>
            </div>
          </div>
          <hr />
          <div className="details-container mb5">
            <AboutResort resort={data?.resort} />
            <Accommodation resort={data?.resort} />
            <Amenities resort={data?.resort} />
            <Reviews resort={data?.resort} openReviews={openReviews} onReviewsClose={onReviewsClose} />
            <NearbyAttractions resort={data?.resort} />

            <div className={`${styles['cta-container']} p1 flex flex-center`}>
              <div>
                <div><span className="bold">{ data?.resort.price }</span> <span className="font-secondary">night</span></div>
                <div className="font-secondary bold underline">May 2 - May 5</div>
              </div>
              <Link className={`${ButtonStyles['r-button']} ${ButtonStyles['r-button-primary']} mlauto mr2 cursor-pointer`} to="/reserve">Reserve</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResortDetail;
