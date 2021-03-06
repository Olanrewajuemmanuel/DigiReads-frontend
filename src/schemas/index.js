import { gql } from "@apollo/client";

export const GET_AUTHOR = gql`
  query GET_AUTHOR($id: String!) {
    getAuthor(id: $id) {
      name
      status
      books {
        id
        title
        desc
        image
        audio
        price
        date_added
        market_tag
      }
      author_bio
      date_created
    }
  }
`;
export const GET_AUTHOR_FROM_USER = gql`
  query GET_AUTHOR_FROM_USER($id: String!) {
    getAuthorWithUserId(id: $id) {
      verified
  }
}
`;
export const GET_USER = gql`
  query GET_USER($id: String!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      email
      email_verified
      user_category
    }
  }
`;

export const GET_AUTHORS = gql`
  query GET_AUTHORS($limit: Int, $order: Order!) {
    getAuthors(limit: $limit, order: $order) {
      id
      name
      status
      author_bio
      date_created
    }
  }
`;
export const GET_BOOK = gql`
  query GET_BOOK($id: String!) {
    getBookDetails(id: $id) {
      title
      content
      audio
    }
  }
`;

export const CREATE_USER = gql`
  mutation Mutation($createNewUserInput: UserInput!) {
    createNewUser(input: $createNewUserInput) {
      id
      token
      firstName
      lastName
      email
      user_category
    }
  }
`;
export const LOGIN = gql`
  mutation Mutation($loginEmail: String!, $loginPassword: String!) {
    login(email: $loginEmail, password: $loginPassword) {
      id
      token
      email
      firstName
      lastName
      user_category
    }
  }
`;
export const REGISTER_AUTHOR = gql`
  mutation Mutation($authorInput: AuthorInput!, $userId: String!) {
    createNewAuthor(input: $authorInput, userId: $userId) {
      id
      name
      status
      books {
        id
      }
      author_bio
      verified
    }
  }
`;
