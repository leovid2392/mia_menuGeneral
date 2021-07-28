import React from "react";

import logo from "../../assets/logo_mia_by_selina.png";

import Event from "../event/Event";

// import { GrFormPrevious } from "react-icons/gr";
// import { GrFormNext } from "react-icons/gr";

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

			<Event />

			{/* <div className='home_sliderContainer'>
				<button>
					<GrFormPrevious />
				</button>


				<button>
					<GrFormNext />
				</button>
			</div> */}
		</section>
	);
}

export default Home;
