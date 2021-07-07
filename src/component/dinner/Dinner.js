import React from "react";

import dinner_img from "../../assets/cena_esp.jpg";
import "./dinner.css";

function Dinner() {
	return (
		<figure className='dinner_container'>
			<img src={dinner_img} alt='menu cena' />
		</figure>
	);
}

export default Dinner;
