import { HashtagRight, HashtagsBox, HashtagsBoxTitle, HashtagsRoutes } from "./style";

export default function HashtagBox() {
    //teste para fazer a lista de hashtags
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
    <HashtagRight>
      <HashtagsBox>
        <HashtagsBoxTitle>
          <h1>trending</h1>
        </HashtagsBoxTitle>
        {hashtags?.map((item, index) => (
          <HashtagsRoutes key={index}>
            <p># {item}</p>
          </HashtagsRoutes>
        ))}
      </HashtagsBox>
    </HashtagRight>
  );
}
