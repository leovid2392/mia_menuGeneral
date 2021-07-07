import React, { useState } from "react";

import menu_wines from "../../assets/postres_esp.png";

import NavBar from "../navBar/NavBar";

function MenuList({ list }) {
	const [wines, setWines] = useState(false);
	const [drinks, setDrinks] = useState(false);

	const handleWines = () => {
		if (!wines) {
			setWines(true);
			setDrinks(false);
		}
	};

	const handleDrinks = () => {
		if (!drinks) {
			setDrinks(true);
			setWines(false);
		}
	};

	if (wines) {
		return (
			<NavBar
				handleWines={handleWines}
				handleDrinks={handleDrinks}
				img={menu_wines}
			/>
		);
	}

	if (drinks) {
		return (
			<NavBar
				handleWines={handleWines}
				handleDrinks={handleDrinks}
				img={menu_wines}
			/>
		);
	}

	return (
		<div>
			<h1>Nav Bar</h1>

			<button>{list[0]}</button>
			<button onClick={handleDrinks}> {list[1]} </button>
			<button onClick={handleWines}> {list[2]} </button>
		</div>
	);
}

export default MenuList;
