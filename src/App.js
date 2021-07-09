import React, { useState } from "react";
import "./App.css";
// import logo from "./assets/logo_mia_by_selina.png";
// import slider1 from "./assets/slider1.jpg";

import Home from "./component/home/Home";
import MenuList from "./component/menuList/MenuList";

import Pizza from "./component/pizza/Pizza";

function App() {
	const [showHome, setShowHome] = useState(true);

	if (showHome) {
		return <Home setShowHome={setShowHome} showHome={showHome} />;
	}
	if (!showHome) {
		return <MenuList setShowHome={setShowHome} showHome={showHome} />;
	}
}

export default App;
