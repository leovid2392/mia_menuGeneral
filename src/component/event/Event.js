import React, { useState } from "react";

function Event({ url, img }) {
	return (
		<a href={url} target='_blank' rel='noreferrer'>
			<figure className='slider_imgContainer'>
				<img src={img} alt='happy hour' />
				<div className='slider_titleContainer'>
					<h4 className='slider_title'>Click me to buy</h4>
				</div>
			</figure>
		</a>
	);
}

export default Event;
