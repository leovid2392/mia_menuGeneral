import React from "react";

import logo from "../../assets/logo_mia_by_selina.png";
import slider1 from "../../assets/bramble.jpg";

import "./home.css";

function Home({ showHome, setShowHome }) {
	const handleMenu = () => {
		if (showHome) {
			setShowHome(false);
		}
	};

	return (
		<section className='home'>
			<figure className='home_logoContainer'>
				<img src={logo} alt='logo' />
			</figure>

			<button className='home_button' onClick={handleMenu}>
				Menu
			</button>

			<div className='btn home_sliderContainer'>
				<div className='slider_titleContainer'>
					<h3 className='slider_title'>Bramble</h3>
				</div>
				<img src={slider1} alt='happy hour' />
			</div>
		</section>
	);
}

export default Home;
