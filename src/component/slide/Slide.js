import React from "react";

function Slide({ show, position }) {
	const { id, url, title, image } = show;
	return (
		<figure key={id} className={position}>
			<a
				className='slider_linkContainer'
				href={url}
				// target='_blank'
				rel='noreferrer'
			>
				<img className='slider_eventImg' src={image} alt={title} />
				{/* <div className='slider_linkTitle'>
					<h5>Click me to buy</h5>
				</div> */}
			</a>
		</figure>
	);
}

export default Slide;
