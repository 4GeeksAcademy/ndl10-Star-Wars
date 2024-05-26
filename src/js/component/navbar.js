import React from "react";
import { Link } from "react-router-dom";





export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark  bg-dark">
			<Link to="/" className="mt-2 mb-2 me-2">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/141px-Star_Wars_Logo.svg.png"/>
			</Link>
			<span><h2 className="text-info me-3">A long time ago in a galaxy far, far away...</h2></span>


			{/* <div className="ml-auto me-3">
				<Link to="/favorites">
					<button className="btn btn-warning">FAVORITES</button>
				</Link>
			</div> */}
		</nav>
	);
};
