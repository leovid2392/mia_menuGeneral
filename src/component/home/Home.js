import React from "react";

import logo from "../../assets/logo_mia_by_selina.png";
import slider1 from "../../assets/slider1.jpg";

function Home({ handleEnglish, handleSpanish }) {
	return (
		<div className='app'>
			<figure className='logo_container'>
				<img src={logo} alt='logo' />
			</figure>

			<div className='slider_container'>
				<img src={slider1} alt='happy hour' />
			</div>
			<div className='language_selector'>
				<button className='btn' onClick={handleEnglish}>
					Ingles / English
				</button>
				<button className='btn' onClick={handleSpanish}>
					Español /Spanish
				</button>
			</div>
		</div>
	);
}

export default Home;
