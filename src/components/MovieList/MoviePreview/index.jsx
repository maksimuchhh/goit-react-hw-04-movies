import React from "react";

export default function BookPreview({ img, title, releaseDate }) {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt={title} />
      <h4>{title}</h4>
      <p>{releaseDate}</p>
    </>
  );
}
