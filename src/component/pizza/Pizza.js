import React from "react";

import menuPizza from "../../assets/pizza_esp.jpg";
import "./pizza.css";

function Pizza() {
	return (
		<figure className='pizzaImg_container'>
			<img src={menuPizza} alt='menu pizza' />
		</figure>
	);
}

export default Pizza;
