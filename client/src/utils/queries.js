import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_MESSAGES = gql`
subscription {
  messages {
    _id
    sender
    text
  }
}
`;

export const GET_SCENARIO = gql`
  query scenario {
    scenario {
      _id
      name
      challengeType
      backgroundImg
      description
      choices
    }
  }`

