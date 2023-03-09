import Header from "../Header/Header.js";
import { Post } from "../Post";
import { UserName, UserPageContainer, UserPosts } from "./style.js";

export default function UserPage() {
    const postsUser = [
        { post1: 1 },
        { post2: 2 }
    ];

    return (
        <UserPageContainer>
            <Header />
            <UserName>
                <img src="https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141226221?dimensions=771x420&no_crop=true" />
                <h1>Juvenal Juvêncio’s posts</h1>
            </UserName>
            <UserPosts>
                {postsUser.map((e) =>
                    <Post />
                )}
            </UserPosts>
        </UserPageContainer>
    );
}