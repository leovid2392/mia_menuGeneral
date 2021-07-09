import React from "react";

import "./navBar.css";

function NavBar({ setShowHome, showHome }) {
	const handleHome = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	return (
		<div className='nav'>
			<button onClick={handleHome}>Home</button>
			<button>Menu</button>
		</div>
	);
}
export default NavBar;
