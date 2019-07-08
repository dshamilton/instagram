import { graphql } from 'react-relay';

export const Post_post = graphql `
fragment Post_post on Post {
  id
  description
  imageUrl
}
`;

export const Post_viewer = graphql `
  fragment Post_viewer on Viewer {
    id
  }
`;