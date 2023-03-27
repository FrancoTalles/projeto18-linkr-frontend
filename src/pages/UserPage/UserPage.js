import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import { Post } from "../../components/Post";
import { AuthContext } from "../../contexts/auth.context.js";
import { api } from "../../services/api.js";
import { NoPostsText } from "../Home/styles.js";
import { UserName, UserPageContainer, UserPosts } from "./style.js";
import { ThreeDots } from "react-loader-spinner";
import FollowButton from "../../components/FollowButton/FollowButton.js";

export default function UserPage() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isSame, setIsSame] = useState(false);
  const [follow, setFollow] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const { id } = useParams();

  async function getPostsUser() {
    try {
      const promise = await api.get(`/user/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      followValidation();
      setPosts(promise.data);
      setIsLoading(false);
      sameUserValidation(promise.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function sameUserValidation(data) {
    if (data.userResult.username === user.username) {
      setIsSame(true);
    }
  }

  async function followValidation() {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    console.log(config);

    const body = { idUserViewed: 2 };
    console.log(body);
    try {
      const promise = await api.post(`/follow/status`, body, config);
      console.log(promise.data);
      setFollow(promise.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if (!user.token) {
      navigate("/");
    } else {
      getPostsUser();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <UserPageContainer>
      <Header />

      {isLoading ? (
        <UserName>
          <NoPostsText>Loading</NoPostsText>
          <ThreeDots color="#FFFFFF" width={80} />
        </UserName>
      ) : (
        <>
          <UserName>
            <img src={posts?.userResult.pictureURL} />
            <h1>{`${posts?.userResult.username} posts`}</h1>
            {isSame ? (
              ""
            ) : (
              <FollowButton
                follow={follow}
                setFollow={setFollow}
                idUserViewed={id}
                userToken={user.token}
                loadingButton={loadingButton}
                setLoadingButton={setLoadingButton}
              />
            )}
          </UserName>
          <UserPosts>
            {posts?.posts.length === 0 ? (
              <NoPostsText data-test="message">
                There are no posts yet
              </NoPostsText>
            ) : (
              posts?.posts.map((post) => (
                <Post
                  key={Math.random()}
                  postId={post.postid}
                  author={post.postauthor}
                  authorId={post.userid}
                  profilePicture={post.authorphoto}
                  description={post.postdescription}
                  link={post.postlink}
                  linkTitle={post.linktitle}
                  linkDescription={post.linkdescription}
                  linkImage={post.linkimage}
                  liked={post.liked}
                  likeCount={post.likescount}
                  whoLiked={post.wholiked}
                  isReshare={post.reshareid ? true : false}
                  resharer={post.reshareauthor}
                  resharesCount={post.resharescount}
                />
              ))
            )}
          </UserPosts>
        </>
      )}
    </UserPageContainer>
  );
}
