import React from "react";

import vodka from "../../assets/bebidas1.png";
import refresco from "../../assets/bebidas1_2.png";
import sotol from "../../assets/bebidas2.png";
import whisky from "../../assets/bebidas2_2.png";
import mezcal from "../../assets/bebidas3.png";
import licores from "../../assets/bebidas3_2.png";
import botellas from "../../assets/bebidas4.png";
import tequilas from "../../assets/bebidas4_2.png";

import "./drinks.css";

function Drinks() {
	return (
		<div className='drinks'>
			<figure className='img_container'>
				<img src={vodka} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img className='refrescos' src={refresco} alt='menu refresco' />
			</figure>
			<figure className='img_container'>
				<img src={sotol} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img src={whisky} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img src={mezcal} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img src={licores} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img src={botellas} alt='menu vodka' />
			</figure>
			<figure className='img_container'>
				<img src={tequilas} alt='menu vodka' />
			</figure>
		</div>
	);
}

export default Drinks;
