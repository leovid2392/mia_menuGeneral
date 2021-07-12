import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

// <<<<<<<<<<<<<<<<<<<    MENU IMAGES    >>>>>>>>>>>>>>>>>>>>>>

// wines images

import wines1img from "../../assets/wines_ing1.jpg";
import wines2img from "../../assets/wines_ing2.jpg";
import wines3img from "../../assets/wines_ing3.jpg";
import wines4img from "../../assets/wines_ing4.jpg";
import wines5img from "../../assets/wines_ing5.jpg";
import wines6img from "../../assets/wines_ing6.jpg";
import wines7img from "../../assets/wines_ing7.jpg";
import wines8img from "../../assets/wines_ing8.jpg";
import wines9img from "../../assets/wines_ing9.jpg";
import wines10img from "../../assets/wines_ing10.jpg";
import wines11img from "../../assets/wines_ing11.jpg";
import wines12img from "../../assets/wines_ing12.jpg";
import wines13img from "../../assets/wines_ing13.jpg";
import wines14img from "../../assets/wines_ing14.jpg";

// drinks images
import bebidas1Img from "../../assets/bebidas1.png";
import bebidas1_2Img from "../../assets/bebidas1_2.png";
import bebidas2Img from "../../assets/bebidas2.png";
import bebidas2_2Img from "../../assets/bebidas2_2.png";
import bebidas3Img from "../../assets/bebidas3.png";
import bebidas3_2Img from "../../assets/bebidas3_2.png";
import bebidas4Img from "../../assets/bebidas4.png";
import bebidas4_2Img from "../../assets/bebidas4_2.png";

// pizza and pasta images

import pizzaPastaEspImg from "../../assets/pizzaPasta_esp.jpg";
import pizzaPastaIngImg from "../../assets/pizzaPasta_ing.jpg";

// dinner images

import dinnerEspImg from "../../assets/dinner_esp.jpg";
import dinnerIngImg from "../../assets/dinner_ing.jpg";

// desserts images

import dessertsEspImg from "../../assets/desserts_esp.png";
import dessertsIngImg from "../../assets/desserts_ing.png";

// lunch images

import lunchEspImg from "../../assets/lunch_esp.jpg";
import lunchIngImg from "../../assets/lunch_ing.jpg";

// vegan images

import veganEspImg from "../../assets/vegan_esp.png";
import veganIngImg from "../../assets/vegan_ing.png";

// breakFast images

import breakFastEspImg from "../../assets/breakFast_esp.png";
import breakFastIngImg from "../../assets/breakFast_ing.jpg";

// <<<<<<<<<<<<<<<<<<<    MENU IMAGES    >>>>>>>>>>>>>>>>>>>>>>

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

	if (english && wines) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='wines'
					setWines={setWines}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<Wines
					img1={wines1img}
					img2={wines2img}
					img3={wines3img}
					img4={wines4img}
					img5={wines5img}
					img6={wines6img}
					img7={wines7img}
					img8={wines8img}
					img9={wines9img}
					img10={wines10img}
					img11={wines11img}
					img12={wines12img}
					img13={wines13img}
					img14={wines14img}
				/>
			</>
		);
	} else if (wines) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='wines'
					setWines={setWines}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>

				<Wines
					img1={wines1img}
					img2={wines2img}
					img3={wines3img}
					img4={wines4img}
					img5={wines5img}
					img6={wines6img}
					img7={wines7img}
					img8={wines8img}
					img9={wines9img}
					img10={wines10img}
					img11={wines11img}
					img12={wines12img}
					img13={wines13img}
					img14={wines14img}
				/>
			</>
		);
	}
	if (english && drinks) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>

				<Drinks
					img1={bebidas1Img}
					img1_2={bebidas1_2Img}
					img2={bebidas2Img}
					img2_2={bebidas2_2Img}
					img3={bebidas3Img}
					img3_2={bebidas3_2Img}
					img4={bebidas4Img}
					img4_2={bebidas4_2Img}
				/>
			</>
		);
	} else if (drinks) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='drinks'
					setDrinks={setDrinks}
				/>

				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>

				<Drinks
					img1={bebidas1Img}
					img1_2={bebidas1_2Img}
					img2={bebidas2Img}
					img2_2={bebidas2_2Img}
					img3={bebidas3Img}
					img3_2={bebidas3_2Img}
					img4={bebidas4Img}
					img4_2={bebidas4_2Img}
				/>
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

				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>

				<Dinner img={dinnerIngImg} />
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

				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>

				<Dinner img={dinnerEspImg} />
			</>
		);
	}
	if (english && lunch) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='lunch'
					setLunch={setLunch}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<Lunch img={lunchIngImg} />
			</>
		);
	} else if (lunch) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='lunch'
					setLunch={setLunch}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>
				<Lunch img={lunchEspImg} />
			</>
		);
	}
	if (english && breakFast) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='breakFast'
					setBreakFast={setBreakFast}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<BreakFast img={breakFastIngImg} />
			</>
		);
	} else if (breakFast) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='breakFast'
					setBreakFast={setBreakFast}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>
				<BreakFast img={breakFastEspImg} />
			</>
		);
	}
	if (english && vegan) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='vegan'
					setVegan={setVegan}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<Vegan img={veganIngImg} />
			</>
		);
	} else if (vegan) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='vegan'
					setVegan={setVegan}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>
				<Vegan img={veganEspImg} />
			</>
		);
	}
	if (english && pizza) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<Pizza img={pizzaPastaIngImg} />
			</>
		);
	} else if (pizza) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='pizza'
					setPizza={setPizza}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>
				<Pizza img={pizzaPastaEspImg} />
			</>
		);
	}
	if (english && desserts) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='desserts'
					setDesserts={setDesserts}
				/>
				<p className='taxInfo'>
					all prices are in mexican pesos and include 16% TAX FEE
				</p>
				<Desserts img={dessertsIngImg} />
			</>
		);
	} else if (desserts) {
		return (
			<>
				<NavBar
					setShowHome={setShowHome}
					showHome={showHome}
					food='desserts'
					setDesserts={setDesserts}
				/>
				<p className='taxInfo'>
					Los precios son en pesos mexicanos e incluyen 16% de IVA
				</p>
				<Desserts img={dessertsEspImg} />
			</>
		);
	}

	if (!english) {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='menuList_icon' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='menuList_lenguage' onClick={handleEnglish}>
						English
					</button>
				</div>
				<div className='menuList_btnContainer'>
					<div className='menuList_btns'>
						<button onClick={handleDesserts}> Postres </button>
						<button onClick={handleBreakFast}> Desayunos </button>
						<button onClick={handleLunch}> Lunch </button>
						<button onClick={handleDinner}> Cena </button>
					</div>
					<div className='menuList_btns'>
						<button onClick={handleVegan}> Vegano </button>
						<button onClick={handlePizza}> Pizza & Pasta </button>

						<button onClick={handleDrinks}> Bebidas</button>
						<button onClick={handleWines}> Vinos</button>
					</div>
				</div>
			</section>
		);
	} else {
		return (
			<section className='menuList'>
				<div className='menuList_nav'>
					<button className='menuList_icon' onClick={handleMenu}>
						<AiOutlineClose />
					</button>
					<button className='menuList_lenguage' onClick={handleEnglish}>
						Español
					</button>
				</div>
				<div className='menuList_btnContainer'>
					<div className='menuList_btns'>
						<button onClick={handleDesserts}> Desserts </button>
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
}

export default MenuList;
