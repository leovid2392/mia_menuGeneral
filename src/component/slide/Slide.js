import React from "react";

function Slide({ show, position }) {
	const { id, url, title, image } = show;
	return (
		<figure key={id} className={position}>
			<a href={url} target='_blank' rel='noreferrer'>
				<img className='slider_eventImg' src={image} alt={title} />
				<div className='slider_titleContainer'>
					<h4 className='slider_title'>Click me to buy</h4>
				</div>
			</a>
		</figure>
	);
}

export default Slide;
