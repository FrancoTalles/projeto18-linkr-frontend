import {
  HashtagRight,
  HashtagsBox,
  HashtagsBoxTitle,
  HashtagsRoutes,
} from "./style";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HashtagBox() {
  const [hashtags, setHashtags] = useState([]);
  const navigate = useNavigate();

  async function getHashtags() {
    try {
      const promise = await api.get("/hashtags");
      setHashtags(promise.data);
    } catch (error) {
      alert(
        `An error occurred while trying to get the hashtags, please try again.`
      );
      console.log(error);
    }
  }

  function goToHashtag(tag) {
    const hashtag = tag;
    const semHashtag = hashtag.substring(1);
    navigate(`/hashtag/${semHashtag}`);
  }

  useEffect(() => {
    getHashtags();
  }, []);
  return (
    <HashtagRight>
      <HashtagsBox data-test="trending">
        <HashtagsBoxTitle>
          <h1>trending</h1>
        </HashtagsBoxTitle>
        {hashtags.length === 0 ? (
          <HashtagsRoutes>
            <p>Não há hashtags</p>
          </HashtagsRoutes>
        ) : (
          hashtags?.map((item, index) => (
            <HashtagsRoutes
              key={index}
              onClick={() => goToHashtag(item.palavra)}
            >
              <p data-test="hashtag">{item.palavra}</p>
            </HashtagsRoutes>
          ))
        )}
      </HashtagsBox>
    </HashtagRight>
  );
}
