import React from "react";

import img from "../../assets/postres_esp.png";

import "./desserts.css";

function Desserts() {
	return (
		<>
			<figure className='desserts_imgContainer'>
				<img src={img} alt='menu postres' />
			</figure>
		</>
	);
}

export default Desserts;
