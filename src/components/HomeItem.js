import React from "react";
import "./HomeItemCss.css";
import { useNavigate } from "react-router-dom";

function HomeItem({ movie }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/summary", {
      state: {
        name: `${movie.show.name}`,
        summary: `${movie.show.summary}`,
        img: `${movie.show.image.medium}`,
      },
    });
  };
  return (
    <div>
      <div className="page">
        <div className="card">
          <div className="card-info">
            <img src={movie.show.image.medium} alt="img" className="image" />
            <p className="title">{movie.show.name}</p>
            <p className="genre">Genre: {movie.show.genres[0]}</p>
            <button
              className="button"
              onClick={() => {
                handleClick({ movie: movie.show.name });
              }}
            >
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeItem;
