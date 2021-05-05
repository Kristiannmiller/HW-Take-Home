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
export const brokerCarrierQuery = gql`
  query {
    mostRecentSnapshot {
      brokerSlice {
        industries {
          premium
          proportion
          title
        }
        premiumRange {
          premium
          proportion
          title
        }
        brokerDivision {
          premium
          proportion
          title
        }
        products {
          premium
          proportion
          title
        }
      }
      carrierSlice {
        industries {
          premium
          proportion
          title
        }
        premiumRange {
          premium
          proportion
          title
        }
        brokerDivision {
          premium
          proportion
          title
        }
        products {
          premium
          proportion
          title
        }
      }
    }
  }
`
