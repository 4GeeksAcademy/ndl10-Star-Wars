import React, { useContext } from "react";
import "../../styles/home.css";

import { Context } from "../store/appContext";
import { SingleCharacter } from "./singlecharacter";
import { Link } from "react-router-dom";


export const Home = () => {
  const { actions, store } = useContext(Context)
  if (!store.people) return null
  if (!store.planets) return null
  if (!store.vehicle) return null

  const [favorites, setFavorites] = useState([]);

  const handleSelectItem = (type, id) => {
    const isAlreadyFavorite = favorites.some(item => item.type === type && item.id === id);
    if (isAlreadyFavorite) {
      // Remover del array si ya está en favoritos
      setFavorites(favorites.filter(item => !(item.type === type && item.id === id)));
    } else {
      // Añadir al array si no está en favoritos
      setFavorites([...favorites, { type, id }]);
    }
  };
  const isFavorite = (type, id) => {
    return favorites.some(item => item.type === type && item.id === id);
  };


  return (
    <div className="text-center mt-5">
      <div className="dropdown mb-3">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          FAVORITES ({favorites.length})
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {favorites.length === 0 ? (
            <li><span className="dropdown-item">No hay favoritos añadidos</span></li>
          ) : (
            favorites.map((item, index) => (
              <li key={index}><span className="dropdown-item">{item.type}: {item.id}</span></li>
            ))
          )}
        </ul>
      </div>
          Hasta aqui favorites

      <div className="mb-3">
        <h1 className="text-warning border border-warning rounded">PEOPLE </h1>

        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            {store.people.map((people, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={people.uid}>
                <div className="card bg-dark">
                  <img src="..." className="card-img-top" alt={people.properties.name} /> {/* Reemplaza "..." con la URL de la imagen */}
                  <div className="card-body">
                    <h5 className="card-title text-warning">{people.properties.name}</h5>
                    <p className="card-text text-warning">{people.description}</p>
                    <Link to={`/people/${people.uid}`} className="btn btn-primary">Ver más</Link>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleSelectItem('people', people.uid)}>
                      {isFavorite('people', people.uid) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="mb-3">
        <h1 className="text-warning border border-warning rounded">
          PLANETS
        </h1>

        <div>

          <div id="carouselExampleCaptions2" className="carousel slide">
            <div className="carousel-inner">
              {store.planet.map((planet, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={planet.uid}>
                  <div className="card bg-dark">
                    <img src="..." className="card-img-top" alt={planet.properties.name} /> {/* Reemplaza "..." con la URL de la imagen */}
                    <div className="card-body">
                      <h5 className="card-title text-warning">{planet.properties.name}</h5>
                      <p className="card-text text-warning">{planet.description}</p>
                      <Link to={`/planets/${planet.uid}`} className="btn btn-primary">Ver más</Link>
                      <button
                      className="btn btn-warning"
                      onClick={() => handleSelectItem('planets', planet.uid)}>
                      {isFavorite('planets', planet.uid) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                    </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

        </div>

      </div>
      <div className="mb-3">
        <h1 className="text-warning border border-warning rounded">VEHICLES</h1>

        <div id="carouselExampleCaptions1" className="carousel slide">
          <div className="carousel-inner">
            {store.vehicle.map((vehicle, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={vehicle.uid}>
                <div className="card bg-dark">
                  <img src="..." className="card-img-top" alt={vehicle.properties.name} /> {/* Reemplaza "..." con la URL de la imagen */}
                  <div className="card-body">
                    <h5 className="card-title text-warning">{vehicle.properties.name}</h5>
                    <p className="card-text text-warning">{vehicle.description}</p>
                    <Link to={`/vehicles/${vehicle.uid}`} className="btn btn-primary">Ver más</Link>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleSelectItem('vehicles', vehicle.uid)}>
                      {isFavorite('vehicles', vehicle.uid) ? 'Quitar de Favoritos' : 'Añadir a Favoritos'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>



    </div>);  
}





