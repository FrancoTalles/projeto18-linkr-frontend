import { useState } from "react";
import { FollowButtonDiv } from "./style";
import { api } from "../../services/api.js";

export default function FollowButton({
  follow,
  setFollow,
  idUserViewed,
  userToken,
  loadingButton,
  setLoadingButton
}) {

  async function toggleFollow(idUserViewed, userToken, follow) {
    setLoadingButton(true);
    const config = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    };

    const body = { idUserViewed: idUserViewed, follow: follow };

    try {
        const promise = await api.post(`/follow/toggle`, body, config);
        setLoadingButton(false)
        setFollow(!follow)
    } catch (error) {
        alert(`Não foi possível executar a operação devido ao seguinte erro: ${error.message}`);
        setLoadingButton(false)
    }
  }
  return (
    <>
      {follow ? (
        <FollowButtonDiv
          onClick={() => toggleFollow(idUserViewed, userToken, follow)}
          follow={follow}
          loadingButton={loadingButton}
          data-test="follow-btn"
        >
          Unfollow
        </FollowButtonDiv>
      ) : (
        <FollowButtonDiv
          onClick={() => toggleFollow(idUserViewed, userToken, follow)}
          follow={follow}
          loadingButton={loadingButton}
          data-test="follow-btn"
        >
          Follow
        </FollowButtonDiv>
      )}
    </>
  );
}
