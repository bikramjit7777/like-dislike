import React, { useState } from "react";
import "./App.css";

function App() {
  const [like, setLike] = useState(8);
  const [dislike, setDislike] = useState(5);
  const [likeFlag, setLikeFlag] = useState(0);
  const [dislikeFlag, setDislikeFlag] = useState(0);
  function likeFun() {
    if (likeFlag === 0 && dislikeFlag === 1) {
      setLike(like + 1);
      setLikeFlag(1);
      setDislikeFlag(0);
      setDislike(dislike - 1);
    }
    if (likeFlag === 1) {
      setLike(like - 1);
      setLikeFlag(0);
    } else if (likeFlag === 0) {
      setLike(like + 1);
      setLikeFlag(1);
    }
  }
  function dislikeFun() {
    if (dislikeFlag === 0 && likeFlag === 1) {
      setDislike(dislike + 1);
      setLike(like - 1);
      setLikeFlag(0);
      setDislikeFlag(1);
    }
    if (dislikeFlag === 0) {
      setDislike(dislike + 1);
      setDislikeFlag(1);
    }
    if (dislikeFlag === 1) {
      setDislike(dislike - 1);
      setDislikeFlag(0);
    }
  }
  return (
    <div className="app">
      <button
        onClick={likeFun}
        className={`${likeFlag === 1 && "app__button--selected"}`}
      >{`Likes - ${like}`}</button>
      <button
        onClick={dislikeFun}
        className={`${dislikeFlag === 1 && "app__button--selected"}`}
      >{`Dislikes - ${dislike}`}</button>
    </div>
  );
}

export default App;
