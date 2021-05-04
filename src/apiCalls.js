import { gql } from '@apollo/client';



export const brokerQuery = gql`
      query {
        mostRecentSnapshot {
        broker {
          description
          name
        }
      }
    }
  `
