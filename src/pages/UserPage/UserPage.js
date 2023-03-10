import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header.js";
import { Post } from "../../components/Post";
import { AuthContext } from "../../contexts/auth.context.js";
import { api } from "../../services/api.js";
import { NoPostsText } from "../Home/styles.js";
import { UserName, UserPageContainer, UserPosts } from "./style.js";

export default function UserPage() {
    const [posts, setPosts] = useState();

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
            <UserName>
                <img src={posts?.authorphoto} />
                <h1>{`${posts?.postauthor} posts`}</h1>
            </UserName>
            <UserPosts>
                {
                    posts?.postsUser.length === 0 ?
                        (
                            <NoPostsText>There are no posts yet</NoPostsText>
                        ) :
                        posts?.postsUser.map((post) =>
                            <Post
                                key={post.postid}
                                author={posts.postauthor}
                                profilePicture={posts.authorphoto}
                                description={post.postdescription}
                                link={post.postlink}
                            />
                        )
                }
            </UserPosts>
        </UserPageContainer>
    );
}