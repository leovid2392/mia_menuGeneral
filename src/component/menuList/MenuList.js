import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

import pizzaImg from "../../assets/pizza_esp.jpg";
import cenaImg from "../../assets/cena_esp.jpg";

import NavBar from "../navBar/NavBar";
import Drinks from "../drinks/Drinks";
import Dinner from "../dinner/Dinner";
import Vegan from "../vegan/Vegan";
import Desserts from "../desserts/Desserts";
import Pizza from "../pizza/Pizza";
import Lunch from "../lunch/Lunch";
import Wines from "../wines/Wines";
import BreakFast from "../breakFast/BreakFast";

import "./menuList.css";

function MenuList({ showHome, setShowHome }) {
	const [english, setEnglish] = useState(false);
	const [wines, setWines] = useState(false);
	const [drinks, setDrinks] = useState(false);
	const [dinner, setDinner] = useState(false);
	const [lunch, setLunch] = useState(false);
	const [desserts, setDesserts] = useState(false);
	const [vegan, setVegan] = useState(false);
	const [breakFast, setBreakFast] = useState(false);
	const [pizza, setPizza] = useState(false);

	const handleMenu = () => {
		if (!showHome) {
			setShowHome(true);
		}
	};

	const handlePizza = () => {
		if (!pizza) {
			setPizza(true);
			setBreakFast(false);
			setVegan(false);
			setDesserts(false);
			setWines(false);
			setDrinks(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleBreakFast = () => {
		if (!breakFast) {
			setBreakFast(true);
			setPizza(false);
			setVegan(false);
			setDesserts(false);
			setWines(false);
			setDrinks(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleVegan = () => {
		if (!vegan) {
			setVegan(true);
			setPizza(false);
			setBreakFast(false);
			setDesserts(false);
			setWines(false);
			setDrinks(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleDesserts = () => {
		if (!desserts) {
			setDesserts(true);
			setPizza(false);
			setBreakFast(false);
			setVegan(false);
			setWines(false);
			setDrinks(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleWines = () => {
		if (!wines) {
			setWines(true);
			setPizza(false);
			setBreakFast(false);
			setVegan(false);
			setDesserts(false);
			setDrinks(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleDrinks = () => {
		if (!drinks) {
			setDrinks(true);
			setPizza(false);
			setBreakFast(false);
			setVegan(false);
			setDesserts(false);
			setWines(false);
			setDinner(false);
			setLunch(false);
		}
	};

	const handleDinner = () => {
		if (!dinner) {
			setDinner(true);
			setPizza(false);
			setBreakFast(false);
			setVegan(false);
			setDesserts(false);
			setWines(false);
			setDrinks(false);
			setLunch(false);
		}
	};

	const handleLunch = () => {
		if (!lunch) {
			setLunch(true);
			setPizza(false);
			setBreakFast(false);
			setVegan(false);
			setDesserts(false);
			setWines(false);
			setDrinks(false);
			setDinner(false);
		}
	};

	const handleEnglish = () => {
		if (!english) {
			setEnglish(true);
		} else {
			setEnglish(false);
		}
	};

	if (wines) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='wines'
					setWines={setWines}
					// handleWines={handleWines}
					// handleDrinks={handleDrinks}
					// handleDinner={handleDinner}
					// handleLunch={handleLunch}
					// handleBreakFast={handleBreakFast}
					// handleDesserts={handleDesserts}
					// handlePizza={handlePizza}
					// handleVegan={handleVegan}
				/>

				<Wines />
			</>
		);
	}
	if (drinks) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
					// handleWines={handleWines}
					// handleDrinks={handleDrinks}
					// handleDinner={handleDinner}
					// handleLunch={handleLunch}
					// handleBreakFast={handleBreakFast}
					// handleDesserts={handleDesserts}
					// handlePizza={handlePizza}
					// handleVegan={handleVegan}
				/>

				<Drinks />
			</>
		);
	}
	if (english && dinner) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='dinner'
					setDinner={setDinner}
				/>

				<Dinner img={pizzaImg} />
			</>
		);
	} else if (dinner) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='dinner'
					setDinner={setDinner}
				/>

				<Dinner img={cenaImg} />
			</>
		);
	}
	if (lunch) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='lunch'
					setLunch={setLunch}
				/>
				<Lunch />
			</>
		);
	}
	if (breakFast) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='breakFast'
					setBreakFast={setBreakFast}
				/>
				<BreakFast />
			</>
		);
	}
	if (vegan) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='vegan'
					setVegan={setVegan}
				/>
				<Vegan />
			</>
		);
	}
	if (pizza) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
				/>
				<Pizza />
			</>
		);
	}
	if (desserts) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='desserts'
					setDesserts={setDesserts}
				/>
				<Desserts />
			</>
		);
	}

	if (!english) {
		return (
			<section className='menuList'>
				<div className='menuList_btnContainer'>
					<div>
						<button className='menuList_icon' onClick={handleMenu}>
							<AiOutlineClose />
						</button>
						<button onClick={handleEnglish}>english</button>
					</div>
					<div className='menuList_btns'>
						<button onClick={handleDesserts}> postres </button>
						<button onClick={handleBreakFast}> desayunos </button>
						<button onClick={handleLunch}> lunch </button>
						<button onClick={handleDinner}> cena </button>
					</div>
					<div className='menuList_btns'>
						<button onClick={handleVegan}> vegano </button>
						<button onClick={handlePizza}> pizza & pasta </button>

						<button onClick={handleDrinks}> bebidas</button>
						<button onClick={handleWines}> vinos</button>
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<section className='menuList'>
				<div className='menuList_btnContainer'>
					<div>
						<button className='menuList_icon' onClick={handleMenu}>
							<AiOutlineClose />
						</button>
						<button onClick={handleEnglish}>english</button>
					</div>
					<div className='menuList_btns'>
						<button onClick={handleDesserts}> desserts </button>
						<button onClick={handleBreakFast}> Breakfast </button>
						<button onClick={handleLunch}> Lunch </button>
						<button onClick={handleDinner}> Dinner </button>
					</div>
					<div className='menuList_btns'>
						<button onClick={handleVegan}> Vegan </button>
						<button onClick={handlePizza}> Pizza & Pasta </button>

						<button onClick={handleDrinks}> Drinks</button>
						<button onClick={handleWines}> Wines</button>
					</div>
				</div>
			</section>
		);
	}

	// return (
	// 	<section className='menuList'>
	// 		<div className='menuList_btnContainer'>
	// 			<div>
	// 				<button className='menuList_icon' onClick={handleMenu}>
	// 					<AiOutlineClose />
	// 				</button>
	// 				<button>english</button>
	// 			</div>
	// 			<div className='menuList_btns'>
	// 				<button onClick={handleDesserts}> postres </button>
	// 				<button onClick={handleBreakFast}> desayunos </button>
	// 				<button onClick={handleLunch}> lunch </button>
	// 				<button onClick={handleDinner}> cena </button>
	// 			</div>
	// 			<div className='menuList_btns'>
	// 				<button onClick={handleVegan}> vegano </button>
	// 				<button onClick={handlePizza}> pizza & pasta </button>

	// 				<button onClick={handleDrinks}> bebidas</button>
	// 				<button onClick={handleWines}> vinos</button>
	// 			</div>
	// 		</div>
	// 	</section>
	// );
}

export default MenuList;
