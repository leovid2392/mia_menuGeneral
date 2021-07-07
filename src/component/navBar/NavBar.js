import React from "react";

import logo from "../../assets/logo_mia_by_selina.png";

function NavBar({ handleWines, handleDrinks, img }) {
	return (
		<div>
			<div>
				<figure>
					<img src={logo} alt='mia logo' />
				</figure>
			</div>
			<div>
				<button>alimentos</button>
				<button onClick={handleDrinks}>bebidas</button>
				<button onClick={handleWines}>vinos</button>
			</div>

			<figure>
				<img src={img} alt='menu wines' />
			</figure>
		</div>
	);
}
export default NavBar;
