import { useState } from "react";

export function Count() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        <h1>like {like}</h1>
      </button>
      <button
        onClick={() => {
          setDislike(dislike + 1);
        }}
      >
        <h1>dislike {dislike}</h1>
      </button>
    </div>
  );
}
