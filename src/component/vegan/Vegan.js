import React from "react";

import menu_vegan from "../../assets/vegan_esp.png";

import "./vegan.css";

function Vegan() {
	return (
		<figure className='menu_img'>
			<img src={menu_vegan} alt='menu vegano' />
		</figure>
	);
}

export default Vegan;
