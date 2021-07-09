import React, { useState } from "react";

import logo from "../../assets/logo_mia_by_selina.png";
import slider1 from "../../assets/slider1.jpg";

import "./home.css";

function Home({ showHome, setShowHome }) {
	const handleMenu = () => {
		if (showHome) {
			setShowHome(false);
		}
	};

	return (
		<div className='app'>
			<figure className='logo_container'>
				<img src={logo} alt='logo' />
			</figure>

			<button onClick={handleMenu}>Menu</button>

			<div className='slider_container'>
				<img src={slider1} alt='happy hour' />
			</div>
		</div>
	);
}

export default Home;
