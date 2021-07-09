import React, { useState } from "react";

import menu_wines from "../../assets/postres_esp.png";
import logo from "../../assets/logo_mia_by_selina.png";

import { AiOutlineClose } from "react-icons/ai";

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

	if (wines) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
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
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>

				<Drinks />
			</>
		);
	}
	if (dinner) {
		return (
			<>
				<NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>

				<Dinner />
			</>
		);
	}
	if (lunch) {
		return (
			<>
				<NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>
				<Lunch />
			</>
		);
	}
	if (breakFast) {
		return (
			<>
				<NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>
				<BreakFast />
			</>
		);
	}
	if (vegan) {
		return (
			<>
				<NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>
				<Vegan />
			</>
		);
	}
	if (pizza) {
		return (
			<>
				<NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/>
				<Pizza />
			</>
		);
	}
	if (desserts) {
		return (
			<>
				{/* <NavBar
					handleWines={handleWines}
					handleDrinks={handleDrinks}
					handleDinner={handleDinner}
					handleLunch={handleLunch}
					handleBreakFast={handleBreakFast}
					handleDesserts={handleDesserts}
					handlePizza={handlePizza}
					handleVegan={handleVegan}
				/> */}
				<Desserts />
			</>
		);
	}

	return (
		<div className='menu_list'>
			{/* <figure className='menuList_imgContainer'>
				<img src={logo} alt='mia logo' />
			</figure> */}
			<section className='menuList_btnContainer'>
				{/* <button> alimentos </button> */}
				<button className='menuList_icon' onClick={handleMenu}>
					<AiOutlineClose />
				</button>
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
			</section>
		</div>
	);
}

export default MenuList;
