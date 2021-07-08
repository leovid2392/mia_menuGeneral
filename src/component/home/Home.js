import React, { useState } from "react";

import logo from "../../assets/logo_mia_by_selina.png";
import slider1 from "../../assets/slider1.jpg";
import MenuList from "../menuList/MenuList";

import "./home.css";

function Home({ handleEnglish, handleSpanish }) {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenu = () => {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	};
	return (
		<div className='app'>
			<MenuList handleMenu={handleMenu} menuState={showMenu} />

			<div className={showMenu ? `home_hide` : `home_test`}>
				<figure className='logo_container'>
					<img src={logo} alt='logo' />
				</figure>

				<button onClick={handleMenu}>Menu</button>

				<div className='slider_container'>
					<img src={slider1} alt='happy hour' />
				</div>
			</div>

			{/* <div className='language_selector'>
				<button className='btn' onClick={handleEnglish}>
					Ingles / English
				</button>
				<button className='btn' onClick={handleSpanish}>
					Español /Spanish
				</button>
			</div> */}
		</div>
	);
}

export default Home;
