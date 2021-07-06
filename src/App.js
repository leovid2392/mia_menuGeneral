import React, { useState, useEffect } from "react";
import "./App.css";
// import logo from "./assets/logo_mia_by_selina.png";
// import slider1 from "./assets/slider1.jpg";

import Home from "./component/home/Home";

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

	if (!spanish && !english) {
		return <Home handleEnglish={handleEnglish} handleSpanish={handleSpanish} />;
	}
	if (spanish) {
		return (
			<div>
				<h1>menu en spañol</h1>
			</div>
		);
	}
	if (handleEnglish) {
		return (
			<div>
				<h1>menu en ingles</h1>
			</div>
		);
	}
}

export default App;
