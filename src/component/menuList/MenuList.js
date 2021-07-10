import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";

// <<<<<<<<<<<<<<<<<<<    MENU IMAGES    >>>>>>>>>>>>>>>>>>>>>>

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

				<Wines />
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

				<Wines />
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
				<Desserts img={dessertsEspImg} />
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
