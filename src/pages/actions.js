// Base URL for the Star Wars API
const BASE_URL = "https://www.swapi.tech/api";

// Action to fetch people data
export const getPeople = async (dispatch, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/people?page=${page}&limit=10`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    
    // Get detailed info for each person
    const detailedPeople = await Promise.all(
      data.results.map(async (person) => {
        const detailResponse = await fetch(person.url);
        const detailData = await detailResponse.json();
        return {
          ...detailData.result.properties,
          uid: person.uid
        };
      })
    );
    
    dispatch({ type: "set_people", payload: detailedPeople });
  } catch (error) {
    console.error("Error fetching people:", error);
  }
};

// Action to fetch planet data
export const getPlanet = async (dispatch, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/planets?page=${page}&limit=10`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    
    // Get detailed info for each planet
    const detailedPlanets = await Promise.all(
      data.results.map(async (planet) => {
        const detailResponse = await fetch(planet.url);
        const detailData = await detailResponse.json();
        return {
          ...detailData.result.properties,
          uid: planet.uid
        };
      })
    );
    
    dispatch({ type: "set_planet", payload: detailedPlanets });
  } catch (error) {
    console.error("Error fetching planets:", error);
  }
};

// Action to fetch vehicle data
export const getVehicle = async (dispatch, page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/vehicles?page=${page}&limit=10`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    
    // Get detailed info for each vehicle
    const detailedVehicles = await Promise.all(
      data.results.map(async (vehicle) => {
        const detailResponse = await fetch(vehicle.url);
        const detailData = await detailResponse.json();
        return {
          ...detailData.result.properties,
          uid: vehicle.uid
        };
      })
    );
    
    dispatch({ type: "set_vehicles", payload: detailedVehicles });
  } catch (error) {
    console.error("Error fetching vehicles:", error);
  }
};