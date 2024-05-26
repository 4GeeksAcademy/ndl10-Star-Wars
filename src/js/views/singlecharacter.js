import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaJedi } from "react-icons/fa";




 export const SingleCharacter = () => {
    const { id } = useParams();
    const { actions, store } = useContext(Context);
    const character = store.people
      ? store.people.find((people) => people.uid === id)
      : null;
    if (!character) {
      return <div className="text-center"><h1 className="text-warning">Loading...</h1></div>;
    }
    return (
      <div className="container text-center">
        <div class="card mb-3 bg-dark">
          <div className="row g-0">
          {/* <FontAwesomeIcon icon="fa-sharp fa-thin fa-jedi" /> */}
            <div className="col-md-8">
              <div className="card-body bg-warning">
                <h5 className="card-title">{character.properties.name}</h5>
                <p className="card-text">Gender: {character.properties.gender}</p>
                <p className="card-text">Mass:{character.properties.mass}</p>
                <p className="card-text">height: {character.properties.height} </p>
                <FaJedi/><Link to="/">Home</Link> <FaJedi/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
