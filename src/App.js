import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/logo_mia_by_selina.png";
import slider1 from "./assets/slider1.jpg";

function App() {
	const [spanish, setSpanish] = useState(false);
	const [english, setEnglish] = useState(false);

	const handleEnglish = () => {
		if (!english) {
			setEnglish(true);
			setSpanish(false);
		} else {
			setEnglish(false);
		}
	};

	const handleSpanish = () => {
		if (!spanish) {
			setSpanish(true);
			setEnglish(false);
		} else {
			setSpanish(false);
		}
	};

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

export default App;
