import React, { useState, useEffect } from "react";

import september_02 from "../../assets/slider/september_02.jpeg";
import september_05 from "../../assets/slider/september_05.jpeg";
import september_10 from "../../assets/slider/september_10.jpeg";
import september_12 from "../../assets/slider/september_12.jpeg";
import september_16 from "../../assets/slider/september_16.jpeg";
import september_17 from "../../assets/slider/september_17.jpeg";
// import default_img from "../../assets/slider/default.jpeg";

// import { GrFormPrevious } from "react-icons/gr";
import { FiChevronLeft } from "react-icons/fi";
// import { GrFormNext } from "react-icons/gr";
import { FiChevronRight } from "react-icons/fi";

import Slide from "../slide/Slide";

import "./event.css";

import "./event.css";

function Event() {
	const [event, setEvent] = useState(events);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = event.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, event]);

	useEffect(() => {
		let slider = setTimeout(() => {
			setIndex(index + 1);
		}, 4000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	const handlePrevEvent = () => {
		setIndex(index - 1);
	};

	const handleNextEvent = () => {
		setIndex(index + 1);
	};
	return (
		<section className='sliderContainer'>
			{event.map((show, showIndex) => {
				let position = "nextSlide";
				if (showIndex === index) {
					position = "activeSlide";
				}
				if (
					showIndex === index - 1 ||
					(index === 0 && showIndex === event.length - 1)
				) {
					position = "lastSlide";
				}
				return <Slide show={show} position={position} />;
			})}

			<button className='slider_prevBtn' onClick={handlePrevEvent}>
				<FiChevronLeft />
			</button>

			<button className='slider_nextBtn' onClick={handleNextEvent}>
				<FiChevronRight />
			</button>
		</section>
	);
}

const events = [
	{
		id: 2,
		url: "https://www.ticketfairy.com/event/david-penn-5sep2021/",
		title: "special dinner with david penn, golden hour",
		image: september_05,
	},
	{
		id: 3,
		url: "https://www.ticketfairy.com/event/matthias-meyer-11sep2021/",
		title: "special dinner with mathias meyer,golden hour",
		image: september_10,
	},
	{
		id: 4,
		url: "https://www.ticketfairy.com/event/marino-canal-12sep2021/",
		title: "special dinner with marino canal, neo human",
		image: september_12,
	},
	{
		id: 5,
		url: "https://www.ticketfairy.com/event/hunter-game-16sep2021/",
		title: "special dinner with hunter/game",
		image: september_16,
	},
	{
		id: 6,
		url: "https://www.ticketfairy.com/event/nicole-moudaber-17sep2021/",
		title: "special dinner with nicole moudaber, victoria engel",
		image: september_17,
	},
];

export default Event;
