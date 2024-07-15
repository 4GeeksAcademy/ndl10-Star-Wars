import React,  { useContext } from "react";
import { Link } from "react-router-dom";
import { FavRow } from "../component/favRow";
import { Context } from "../store/appContext";




export const Navbar = () => {
	const { store } = useContext(Context);


	return (
		<nav className="navbar navbarcito">
			<Link to="/" className="mt-2 mb-2 me-2">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/141px-Star_Wars_Logo.svg.png"/>
			</Link>

			<div className="dropdown me-2">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites
				</button>
				<div className="dropdown-menu dropdown-menu-end mt-2 ms-1">
					{store.fav.map((favo, index) => (
						<FavRow key={index} body={favo} />
					))}
				</div>
			</div>
		</nav>
	);
};
