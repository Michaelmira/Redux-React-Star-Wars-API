import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { PeopleCards } from "../components/PeopleCards.jsx";
import { PlanetCards } from "../components/PlanetCards.jsx";
import { VehicleCards } from "../components/VehicleCards.jsx";

export const Home = () => {
  const { store, getPeople, getPlanet, getVehicle } = useGlobalReducer();

  useEffect(() => {
    // Fetch data when component mounts
    if (store.people.length === 0) {
      getPeople();
    }
    
    if (store.planet.length === 0) {
      getPlanet();
    }
    
    if (store.vehicles.length === 0) {
      getVehicle();
    }
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Encyclopedia</h1>
      
      {/* People Section */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Characters</h2>
          <Link to="/people" className="btn btn-primary">View All Characters</Link>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {store.people.slice(0, 4).map((person) => (
            <div className="col" key={person.uid}>
              <PeopleCards 
                name={person.name} 
                uid={person.uid} 
                gender={person.gender}
                birth_year={person.birth_year}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Planets Section */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Planets</h2>
          <Link to="/planets" className="btn btn-success">View All Planets</Link>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {store.planet.slice(0, 4).map((planet) => (
            <div className="col" key={planet.uid}>
              <PlanetCards 
                name={planet.name} 
                uid={planet.uid} 
                climate={planet.climate}
                terrain={planet.terrain}
              />
            </div>
          ))}
        </div>
      </section>
      
      {/* Vehicles Section */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Vehicles</h2>
          <Link to="/vehicles" className="btn btn-secondary">View All Vehicles</Link>
        </div>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {store.vehicles.slice(0, 4).map((vehicle) => (
            <div className="col" key={vehicle.uid}>
              <VehicleCards 
                name={vehicle.name} 
                uid={vehicle.uid} 
                model={vehicle.model}
                manufacturer={vehicle.manufacturer}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;