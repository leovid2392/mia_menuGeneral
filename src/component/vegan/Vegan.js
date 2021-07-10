import React from "react";

import "./vegan.css";

function Vegan({ img }) {
	return (
		<figure className='menu_img'>
			<img src={img} alt='menu vegano' />
		</figure>
	);
}

export default Vegan;
