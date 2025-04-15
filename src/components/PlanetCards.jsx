import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PlanetCards = (props) => {
  const { store, dispatch } = useGlobalReducer();
  
  const handleFav = () => {
    dispatch({
      type: "toggle_favorites", 
      payload: {
        name: props.name,
        uid: props.uid,
        cat: "planet"  // Using "cat" consistently
      }
    });
    console.log("Planet added to favorites", store.fav);
  }

  // Check if this planet is already in favorites
  const isFavorite = store.fav.some(
    fav => fav.name === props.name && fav.cat === "planet"
  );

  return (
    <div className="card text-bg-success mb-3" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Climate: {props.climate}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <button 
            onClick={handleFav} 
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
          >
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
          <Link to={`/planets/${props.uid}`} className="btn btn-success">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};