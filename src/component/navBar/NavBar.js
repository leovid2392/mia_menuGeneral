import React from "react";

import { AiOutlineHome } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import "./navBar.css";

function NavBar({
	setShowHome,
	showHome,
	food,
	setWines,
	setDrinks,
	setDinner,
	setLunch,
	setBreakFast,
	setVegan,
	setPizza,
	setDesserts,
}) {
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

		if (food === "dinner") {
			setDinner(false);
		}

		if (food === "lunch") {
			setLunch(false);
		}

		if (food === "breakFast") {
			setBreakFast(false);
		}

		if (food === "vegan") {
			setVegan(false);
		}

		if (food === "pizza") {
			setPizza(false);
		}

		if (food === "desserts") {
			setDesserts(false);
		}
	};

	return (
		<div className='nav'>
			<button className='nav_icon' onClick={handleHome}>
				<AiOutlineHome />
			</button>
			<button className='nav_icon' onClick={handleMenu}>
				<FaBars />
			</button>
		</div>
	);
}
export default NavBar;
