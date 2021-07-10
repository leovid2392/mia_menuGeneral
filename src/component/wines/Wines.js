import React from "react";

function Wines({ img }) {
	return (
		<>
			<h1>Waiting for wines img</h1>
			<figure className='menu_img'>
				<img src={img} alt='wines menu' />
			</figure>
		</>
	);
}

export default Wines;
