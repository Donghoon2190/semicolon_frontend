import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "rl-react-helmet";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import FatText from "../../Components/FatText";
import FollowButton from "../../Components/FollowButton";
import SquarePost from "../../Components/SquarePost";
import Button from "../../Components/Button";
import { LOG_OUT } from "./ProfileContainer";
import EditProfile from "./EditProfile";
import { Setting } from "../../Components/Icons";
const Wrapper = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

const HeaderColumn = styled.div``;

const NameDiv = styled.div`
width: 200px;
    overflow: hidden;
`;
const IconDiv = styled.div``;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
`;

const Username = styled.span`
  font-size: 26px;
  display: block;
`;

const Counts = styled.ul`
  display: flex;
  margin: 15px 0px;
`;

const Count = styled.li`
  font-size: 16px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const FullName = styled(FatText)`
  font-size: 16px;
`;

const Bio = styled.p`
  margin: 10px 0px;
`;
const Button1 = styled.span`

  cursor: pointer;
`;


const Posts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  grid-template-rows: 200px;
  grid-auto-rows: 200px;
`;

export default ({ loading, data, logOut }) => {
  if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (!loading && data && data.seeUser) {

    const [editProfile, setEditProfile] = useState(false);

    const editClick = (e) => {
      setEditProfile(e => !e)
    }

    const { seeUser: {
      id,
      avatar,
      username,
      firstName,
      lastName,
      fullName,
      isFollowing,
      isSelf,
      bio,
      followingCount,
      followersCount,
      postsCount,
      posts,
    }
    } = data;
    const [userInfo, setUserInfo] = useState({
      username,
      avatar,
      firstName,
      lastName,
      bio,
    });
    console.log(userInfo)
    return (
      !editProfile ?
        (<Wrapper>
          <Helmet>
            <title>{username} | Prismagram</title>
          </Helmet>
          <Header>
            <HeaderColumn>
              <Avatar size="lg" url={avatar} />
            </HeaderColumn>
            <HeaderColumn>
              <UsernameRow>
                <NameDiv>
                  <Username>{userInfo.username}</Username>{" "}
                </NameDiv>
                <IconDiv>
                  <Button1 onClick={() => { editClick() }} >
                    <Setting />
                  </Button1>
                </IconDiv>
              </UsernameRow>
              <Counts>
                <Count>
                  <FatText text={String(postsCount)} /> posts
              </Count>
                <Count>
                  <FatText text={String(followersCount)} /> followers
              </Count>
                <Count>
                  <FatText text={String(followingCount)} /> following
              </Count>

              </Counts>
              <FullName text={userInfo.firstName + userInfo.lastName} />
              <Bio>{userInfo.bio}</Bio>
              {isSelf ? <Button onClick={logOut} text="Log Out" /> : <FollowButton isFollowing={isFollowing} id={id} />}
            </HeaderColumn>
          </Header>
          <Posts>
            {posts &&
              posts.map(post => (
                <SquarePost
                  key={post.id}
                  likeCount={post.likeCount}
                  commentCount={post.commentCount}
                  file={post.files[0]}
                />
              ))}
          </Posts>
        </Wrapper>)
        : (
          <EditProfile data={data.seeUser} setUserInfo={setUserInfo} userInfo={userInfo} setEditProfile={setEditProfile} />
        )

    );
  }
}