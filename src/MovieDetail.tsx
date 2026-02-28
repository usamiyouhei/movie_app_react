import React from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const { movieId } = useParams();
  return (
    <div>
      <h1>Movie Detail</h1>
      <p>{movieId}</p>
    </div>
  );
};

export default MovieDetail;
