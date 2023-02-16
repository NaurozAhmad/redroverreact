import { gql } from '@apollo/client';

const GET_RESORT = gql`
  query GetResort($id: ID!) {
    resort(id: $id) {
      id
      name
      description
      phone
      address {
        street
        city
        state
        zip
      }
      rating
      reviews {
        rating
        review
        reviewBy
        dateCreated
      }
      reviewsCount
      dateCreated
      accommodations {
        name
        description
      }
      amenities
      location {
        lat
        long
      }
      nearbyAttractions {
        name
        description
        address
        image
      }
      rules
      cancellationPolicy
      faqs {
        question
        answer
      }
      localActivities {
        name
        description
        image
      }
      events {
        id
        name
        description
        images
        resortId
        dateCreated
        dateStart
        dateEnd
      }
      images
      price
      accommodationsCount
      amenitiesCount
      nearbyAttractionsCount
      faqsCount
      localActivitiesCount
      eventsCount
      imagesCount
    }
  }
`;

export default GET_RESORT;
