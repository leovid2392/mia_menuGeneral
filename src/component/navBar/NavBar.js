import React from "react";

import "./navBar.css";

function NavBar({ setShowHome, showHome, food, setWines, setDrinks }) {
	const handleHome = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	const handleMenu = () => {
		if (food === "wines") {
			setWines(false);
		}

		if (food === "drinks") {
			setDrinks(false);
		}
	};

	return (
		<div className='nav'>
			<button onClick={handleHome}>Home</button>
			<button onClick={handleMenu}>Menu</button>
		</div>
	);
}
export default NavBar;
