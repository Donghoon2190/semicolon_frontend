import React, { useState } from "react";
import { gql } from "apollo-boost";
import { withRouter } from "react-router-dom";
import { useMutation, useQuery } from "react-apollo-hooks";
import ProfilePresenter from "./ProfilePresenter";

export const GET_USER = gql`
  query seeUser($username: String!) {
    seeUser(username: $username) {
      id
      avatar
      username
      fullName
      firstName
      lastName
      isFollowing
      isSelf
      bio
      followingCount
      followersCount
      postsCount
      posts {
        id
        files {
          url
        }
        likeCount
        commentCount
      }
    }
  }
`;

export const LOG_OUT = gql`
mutation logUserOut{
  logUserOut @client
}`

export default withRouter(({ match: { params: { username } } }) => {

  const { data, loading } = useQuery(GET_USER, { variables: { username } });

  // userInfo = { userInfo } setUserInfo = { setUserInfo }
  const [logOut] = useMutation(LOG_OUT)

  return <ProfilePresenter loading={loading} logOut={logOut} data={data} />;
});