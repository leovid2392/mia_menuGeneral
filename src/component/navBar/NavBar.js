import React from "react";

import "./navBar.css";

import logo from "../../assets/logo_mia_by_selina.png";

function NavBar({ handleWines, handleDrinks }) {
	return (
		<div className='nav'>
			<figure className='nav_logoContaier'>
				<img src={logo} alt='mia logo' />
			</figure>

			<div className='nav_btnContainer'>
				<button onClick={handleDrinks}>postres</button>
				<button onClick={handleDrinks}>desayunos</button>
				<button onClick={handleDrinks}>cena</button>
				<button onClick={handleDrinks}>launch</button>
				<button onClick={handleDrinks}>vegano</button>
				<button onClick={handleDrinks}>pizza & pasta</button>
				<button onClick={handleDrinks}>bebidas</button>
				<button onClick={handleWines}>vinos</button>
			</div>
		</div>
	);
}
export default NavBar;
