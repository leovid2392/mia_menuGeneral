import React from "react";

import "./drinks.css";

function Drinks({ img1, img1_2, img2, img2_2, img3, img3_2}) {
	return (
		<div className='drinks'>
			<figure className='menu_img'>
				<img src={img1} alt='menu vodka' />
			</figure>
			<figure className='menu_img'>
				<img className='refrescos' src={img1_2} alt='menu refresco' />
			</figure>
			<figure className='menu_img'>
				<img src={img2} alt='menu vodka' />
			</figure>
			<figure className='menu_img'>
				<img src={img2_2} alt='menu vodka' />
			</figure>
			<figure className='menu_img'>
				<img src={img3} alt='menu vodka' />
			</figure>
			<figure className='menu_img'>
				<img src={img3_2} alt='menu vodka' />
			</figure>
			
		</div>
	);
}

export default Drinks;
