import React, { useState } from "react";

import menu_wines from "../../assets/postres_esp.png";
import logo from "../../assets/logo_mia_by_selina.png";

import NavBar from "../navBar/NavBar";
import Drinks from "../drinks/Drinks";

import "./menuList.css";

function MenuList() {
	const [wines, setWines] = useState(false);
	const [drinks, setDrinks] = useState(false);

	const handleWines = () => {
		if (!wines) {
			setWines(true);
			setDrinks(false);
		}
	};

	const handleDrinks = () => {
		if (!drinks) {
			setDrinks(true);
			setWines(false);
		}
	};

	if (wines) {
		return (
			<NavBar
				handleWines={handleWines}
				handleDrinks={handleDrinks}
				img={menu_wines}
			/>
		);
	}

	if (drinks) {
		return (
			<>
				<NavBar handleWines={handleWines} handleDrinks={handleDrinks} />

				<Drinks />
			</>
		);
	}

	return (
		<div className='menuList'>
			<figure className='menuList_imgContainer'>
				<img src={logo} alt='mia logo' />
			</figure>
			<section className='menuList_btnContainer'>
				<button> alimentos </button>
				<div className='alimentos_container'>
					<button> postres </button>
					<button> desayunos </button>
					<button> launch </button>
					<button> cena </button>
					<button> vegano </button>
					<button> pizza & pasta </button>
				</div>

				<button onClick={handleDrinks}> bebidas</button>
				<button onClick={handleWines}> vinos</button>
			</section>
		</div>
	);
}

export default MenuList;
