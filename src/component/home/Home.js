import React from "react";

import logo from "../../assets/logo_mia_by_selina.png";
import slider1 from "../../assets/slider/july_25.jpeg";

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

			<div className='home_sliderContainer'>
				{/* <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
					<div className='slider_titleContainer'>
						<h4 className='slider_title'>Click me to buy</h4>
					</div>
				</a> */}
				<a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
					<figure className='slider_imgContainer'>
						<img src={slider1} alt='happy hour' />
						<div className='slider_titleContainer'>
							<h4 className='slider_title'>Click me to buy</h4>
						</div>
					</figure>
				</a>
			</div>
		</section>
	);
}

export default Home;
