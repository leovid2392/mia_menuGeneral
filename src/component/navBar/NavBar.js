import React from "react";

import "./navBar.css";

import logo from "../../assets/logo_mia_by_selina.png";

function NavBar({
	handleWines,
	handleDrinks,
	handleDinner,
	handleVegan,
	handlePizza,
	handleDesserts,
	handleLunch,
	handleBreakFast,
}) {
	return (
		<div className='nav'>
			<figure className='nav_logoContaier'>
				<img src={logo} alt='mia logo' />
			</figure>

			<div className='nav_btnContainer'>
				<button onClick={handleDesserts}>postres</button>
				<button onClick={handleBreakFast}>desayunos</button>
				<button onClick={handleDinner}>cena</button>
				<button onClick={handleLunch}>lunch</button>
				<button onClick={handleVegan}>vegano</button>
				<button onClick={handlePizza}>pizza & pasta</button>
				<button onClick={handleDrinks}>bebidas</button>
				<button onClick={handleWines}>vinos</button>
			</div>
		</div>
	);
}
export default NavBar;
