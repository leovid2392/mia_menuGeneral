import React from "react";

import menuLunch from "../../assets/lunch_esp.jpg";

import "./lunch.css";

function Lunch() {
	return (
		<figure className='menu_img'>
			<img src={menuLunch} alt='menu lunch' />
		</figure>
	);
}

export default Lunch;
