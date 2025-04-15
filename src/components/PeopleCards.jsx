import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PeopleCards = (props) => {
  const { store, dispatch } = useGlobalReducer();
  
  const handleFav = () => {
    dispatch({
      type: "toggle_favorites", 
      payload: {
        name: props.name,
        uid: props.uid,
        cat: "people"  // Using "cat" consistently
      }
    });
    console.log("check my favs", store.fav);
  }

  // Check if this person is already in favorites using "cat" property
  const isFavorite = store.fav.some(
    fav => fav.name === props.name && fav.cat === "people"
  );

  return (
    <div className="card text-bg-primary mb-3" style={{ minWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex justify-content-between align-items-center mt-2">
          <button 
            onClick={handleFav} 
            className={`btn ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
          >
            <i className={`fa-${isFavorite ? "solid" : "regular"} fa-heart`}></i>
          </button>
          <Link to={`/people/${props.uid}`} className="btn btn-primary">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};