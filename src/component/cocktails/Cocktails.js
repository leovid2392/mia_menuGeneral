import React from "react";

function Cocktails({ img }) {
	return (
		<div className='cocktails'>
			<figure className='menu_img'>
				<img src={img} alt='cocktails menu' />
			</figure>
		</div>
	);
}

export default Cocktails;
