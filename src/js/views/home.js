import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CharacterCardFav } from "../component/characterCardFav";
import { PlanetCardFav } from "../component/planetCardFav";
import { VehicleCardFav } from "../component/vehicleCardFav";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container page-content d-flex flex-column min-vh-100">
			<div className="text-info text-center mt-3">
				<h1>Characters</h1>
			</div>
			<div className="scroll text-white mt-3 d-flex horizontal-scroll">
				{store.characters.map((character, index) => (
					<CharacterCardFav key={index} body={character}></CharacterCardFav>
				))}
			</div>
			<div className="row text-info text-center mt-3">
				<h1>Planets</h1>
			</div>
			<div className="scroll text-white mt-3 d-flex horizontal-scroll">
				{store.planets.map((planets, index) => (
					<PlanetCardFav key={index} body={planets}></PlanetCardFav>
				))}
			</div>
			<div className="row text-info text-center mt-3">
				<h1>Vehicles</h1>
			</div>
			<div className="scroll text-white mt-3 d-flex horizontal-scroll">
				{store.vehicles.map((vehicles, index) => (
					<VehicleCardFav key={index} body={vehicles}></VehicleCardFav>
				))}
			</div>
		</div>
	)
};
