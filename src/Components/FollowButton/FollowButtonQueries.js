import { gql } from "apollo-boost";

export const FOLLOW = gql`
  mutation following($id: String!) {
    following(id: $id)
  }
`;

export const UNFOLLOW = gql`
  mutation unfollowing($id: String!) {
    unfollowing(id: $id)
  }
`;