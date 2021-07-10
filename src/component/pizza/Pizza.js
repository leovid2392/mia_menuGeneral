import React from "react";

import "./pizza.css";

function Pizza({ img }) {
	return (
		<figure className='menu_img'>
			<img src={img} alt='menu pizza' />
		</figure>
	);
}

export default Pizza;
