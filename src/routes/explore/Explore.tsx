import { Link } from 'react-router-dom';
import { useQuery, gql, ApolloError } from '@apollo/client';

import styles from './Explore.module.css';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Resort } from 'interfaces';

import Navbar from 'components/navbar/Navbar';

const Explore = () => {
  const {
    loading,
    error,
    data,
  }: { loading: Boolean; error?: ApolloError | undefined; data: { resorts: Resort[] } | undefined } = useQuery(gql`
    query GetResorts {
      resorts {
        id
        name
        address {
          city
          state
        }
        price
        rating
        images
      }
    }
  `);
  console.log('resort data', data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <Navbar />
      <div className={styles['content']}>
        {data && data.resorts.map((resort: Resort) => (
          <Link key={resort.id} to={`/resort-detail/${resort.id}`} style={{ textDecoration: 'none' }}>
            <Card className={styles['card']}>
              <CardActionArea>
                <CardMedia component="img" height="200" image={resort.images[0]} alt={resort.name} />
                <CardContent>
                  <Typography gutterBottom variant="h3" component="div">
                    {resort.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="div">
                    <span className={styles['card-body']}>
                      {resort.address.city}, {resort.address.state}
                    </span>
                    <span className={styles['card-body']}>{'30 miles away'}</span>
                    <Typography variant="body1" className={styles['resort-price']}>
                      <span>${resort.price} night</span>
                      <span className={styles['rating']}>
                        <FontAwesomeIcon icon="star" />
                        {resort.rating}
                      </span>
                    </Typography>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Explore;
