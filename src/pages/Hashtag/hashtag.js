import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HashtagBox from "../../components/Hashtag/hashtagBox";
import Header from "../../components/Header/Header";
import { Post } from "../../components/Post";
import { AuthContext } from "../../contexts/auth.context";
import { api } from "../../services/api";
import { NoPostsText, PostContainer } from "../Home/styles";
import {
  HashtagContainer,
  HashtagLeft,
  HashtagTitle,
} from "./style";

export default function Hashtag() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const { hashtag } = useParams();

  async function getAllPostsWithHashtag() {
    const url = `/hashtag/${hashtag}`;
    try {
      const promise = await api.get(url, config);
      setPosts(promise.data);
    } catch (error) {
      alert(
        `An error occurred while trying to get the posts with ${hashtag}, please try again.`
      );
      console.log(error);
    }
  }

  useEffect(() => {
    if (user.token.length === 0) {
      navigate("/");
    } else {
      getAllPostsWithHashtag();
    }
  }, [hashtag]);

  return (
    <>
      <Header />
      <HashtagContainer>
        <HashtagLeft>
          <HashtagTitle>
            <p># {hashtag}</p>
          </HashtagTitle>
          <PostContainer>
            {posts.length === 0 ? (
              <NoPostsText data-test="message">
                There are no posts yet
              </NoPostsText>
            ) : (
              posts?.map((post) => {
                return (
                  <Post
                    key={post.postid}
                    postId={post.postid}
                    author={post.postauthor}
                    profilePicture={post.authorphoto}
                    description={post.postdescription}
                    link={post.postlink}
                    linkTitle={post.linktitle}
                    linkDescription={post.linkdescription}
                    linkImage={post.linkimage}
                  />
                );
              })
            )}
          </PostContainer>
        </HashtagLeft>
        <HashtagBox />
      </HashtagContainer>
    </>
  );
}
