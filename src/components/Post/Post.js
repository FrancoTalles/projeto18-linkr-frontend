import { PostLeftPart, PostRightPart, PostStyled } from "./style.js";
import { IconName } from "react-icons/io";


export default function Post() {
    return (
        <PostStyled>
            <PostLeftPart>
                <img src="https://img.r7.com/images/meme-sorriso-forcado-hide-the-pain-harold-maurice-andras-arato-08112019141226221?dimensions=771x420&no_crop=true" />
                <ion-icon name="heart-outline"></ion-icon>
                <p>13 likes</p>
            </PostLeftPart>
            <PostRightPart>
                <h1>Juvenal Juvêncio</h1>
                <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
                <div>https://...</div>
            </PostRightPart>
        </PostStyled>

    );
}