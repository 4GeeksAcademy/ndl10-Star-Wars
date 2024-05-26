import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaEarthEurope } from "react-icons/fa6";



 export const SinglePlanet = () => {
    const { id } = useParams();
    const { actions, store } = useContext(Context);
    const singlePlanet = store.planet
      ? store.planet.find((planet) => planet.uid === id)
      : null;
    if (!singlePlanet) {
      return <div className="text-center"><h1 className="text-warning">Loading...</h1></div>;
    }
    return (
      <div className="container text-center">
        <div class="card mb-3 bg-dark">
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body bg-warning">
                <h4 className="card-title">{singlePlanet.properties.name}</h4>
                <h5 className="card-text">Climate: {singlePlanet.properties.climate}</h5>
                <h5 className="card-text">Population:{singlePlanet.properties.population}</h5>
                <h5 className="card-text">Gravity: {singlePlanet.properties.gravity}</h5>
                <FaEarthEurope/><Link to="/"> Home</Link> <FaEarthEurope/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
