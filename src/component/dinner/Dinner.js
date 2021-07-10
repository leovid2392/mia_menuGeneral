import React from "react";

import "./dinner.css";

function Dinner({ img }) {
	return (
		<figure className='menu_img'>
			<img src={img} alt='menu cena' />
		</figure>
	);
}

export default Dinner;
