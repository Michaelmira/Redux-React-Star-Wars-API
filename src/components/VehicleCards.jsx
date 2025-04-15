import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const VehicleCards = (props) => {
  const { store, dispatch } = useGlobalReducer();
  
  const handleFav = () => {
    dispatch({
      type: "toggle_favorites", 
      payload: {
        name: props.name,
        uid: props.uid,
        cat: "vehicle"  // Using "cat" consistently
      }
    });
    console.log("Vehicle added to favorites", store.fav);
  }

  // Check if this vehicle is already in favorites
  const isFavorite = store.fav.some(
    fav => fav.name === props.name && fav.cat === "vehicle"
  );

  return (
    <div className="card text-bg-secondary mb-3" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">Model: {props.model}</p>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <button 
            onClick={handleFav} 
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
          >
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
          <Link to={`/vehicles/${props.uid}`} className="btn btn-secondary">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};