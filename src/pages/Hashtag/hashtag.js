import Header from "../../components/Header/Header";
import {
  HashtagContainer,
  HashtagLeft,
  HashtagRight,
  HashtagsBox,
  HashtagsBoxTitle,
  HashtagsRoutes,
  HashtagTitle,
  PostTeste,
} from "./style";

export default function Hashtag() {
  // teste para fazer a lista de hashtags
  const hashtags = [
    "javascript",
    "react",
    "react-native",
    "material",
    "web-dev",
    "mobile",
    "css",
    "html",
    "node",
    "sol",
  ];
  return (
    <>
      <Header />
      <HashtagContainer>
        <HashtagLeft>
          <HashtagTitle>
            <p># react</p>
          </HashtagTitle>
          <PostTeste />
        </HashtagLeft>
        <HashtagRight>
          <HashtagsBox>
            <HashtagsBoxTitle>
              <h1>trending</h1>
            </HashtagsBoxTitle>
            {hashtags?.map((item, index) => (
                <HashtagsRoutes>
                <p># {item}</p>
              </HashtagsRoutes>
            ))}
          </HashtagsBox>
        </HashtagRight>
      </HashtagContainer>
    </>
  );
}
