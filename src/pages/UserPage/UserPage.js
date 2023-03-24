import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import { Post } from "../../components/Post";
import { AuthContext } from "../../contexts/auth.context.js";
import { api } from "../../services/api.js";
import { NoPostsText } from "../Home/styles.js";
import { UserName, UserPageContainer, UserPosts } from "./style.js";
import { ThreeDots } from "react-loader-spinner";


export default function UserPage() {
    const [posts, setPosts] = useState();
    const [isLoading, setIsLoading] = useState(true);


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

            setPosts(promise.data);
            setIsLoading(false);


        } catch (error) {

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

            {isLoading ?
                <UserName>
                    <NoPostsText>Loading</NoPostsText>
                    <ThreeDots color="#FFFFFF" width={80} />
                </UserName>
                :
                <>
                    <UserName>
                        <img src={posts?.userResult.pictureURL} />
                        <h1>{`${posts?.userResult.username} posts`}</h1>
                    </UserName>
                    <UserPosts>
                        {
                            posts?.posts.length === 0 ?
                                (
                                    <NoPostsText data-test="message">There are no posts yet</NoPostsText>
                                ) :
                                posts?.posts.map((post) =>
                                    <Post
                                        key={post.postid}
                                        authorId={post.userid}
                                        postId={post.postid}
                                        author={post.postauthor}
                                        profilePicture={post.authorphoto}
                                        description={post.postdescription}
                                        link={post.postlink}
                                        linkTitle={post.linktitle}
                                        linkDescription={post.linkdescription}
                                        linkImage={post.linkimage}
                                        liked={post.liked}
                                        likeCount={post.likescount}
                                        whoLiked={post.wholiked}
                                    />
                                )
                        }
                    </UserPosts>
                </>
            }

        </UserPageContainer>
    );
}