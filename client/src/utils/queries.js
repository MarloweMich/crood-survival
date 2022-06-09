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

export const QUERY_HERO = gql`
  query hero {
    hero {
      _id
      name
      type
      attributes
      lives
      description
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