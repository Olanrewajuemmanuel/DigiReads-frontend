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
            email
            user_category
        }
    }
  `;
