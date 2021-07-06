import React from "react";

function MenuList({ list }) {
	return (
		<div>
			<h1>Menu list</h1>

			<p>{list[0]}</p>
			<p>{list[1]}</p>
			<p>{list[2]}</p>
		</div>
	);
}

export default MenuList;
