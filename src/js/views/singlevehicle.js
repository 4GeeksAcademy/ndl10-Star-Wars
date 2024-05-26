import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaJetFighterUp } from "react-icons/fa6";



 export const SingleVehicle = () => {
    const { id } = useParams();
    const { actions, store } = useContext(Context);
    const singleVehicle = store.vehicle
      ? store.vehicle.find((vehicle) => vehicle.uid === id)
      : null;
    if (!singleVehicle) {
      return <div className="text-center"><h1 className="text-warning">Loading...</h1></div>;
    }
    return (
      <div className="container text-center">
        
        <div class="card mb-3 bg-dark">
          <div className="row g-0">
            
            <div className="col-md-8">
              <div className="card-body bg-warning">
                <h5 className="card-title">{singleVehicle.properties.name}</h5>
                <p className="card-text">MODEL: {singleVehicle.properties.model}</p>
                <p className="card-text">CREW:{singleVehicle.properties.crew}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    COST IN CREDITS: {singleVehicle.properties.cost_in_credits}
                  </small>
                </p>
                <FaJetFighterUp/><Link to="/"> Home </Link><FaJetFighterUp/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };