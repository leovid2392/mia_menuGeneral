import React, { useState } from "react";
import menu_vinos from "../../assets/postres_esp.png";

function MenuList({ list }) {
	const [vinos, setVinos] = useState(false);

	const handleVinos = () => {
		if (!vinos) {
			setVinos(true);
		} else {
			setVinos(false);
		}
	};

	if (vinos) {
		return (
			<div>
				<h1>Nav Bar</h1>

				<button>{list[0]}</button>
				<button>{list[1]}</button>
				<button onClick={handleVinos}>{list[2]}</button>
				<figure>
					<img src={menu_vinos} alt='menu vinos' />
				</figure>
			</div>
		);
	}
	return (
		<div>
			<h1>Nav Bar</h1>

			<button>{list[0]}</button>
			<button>{list[1]}</button>
			<button onClick={handleVinos}>{list[2]}</button>
		</div>
	);
}

export default MenuList;
