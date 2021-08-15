import React, { useState, useEffect } from "react";

import august_11 from "../../assets/slider/august_11.jpeg";
import august_14 from "../../assets/slider/august_14.jpeg";
import august_15 from "../../assets/slider/august_15.jpeg";

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

	// useEffect(() => {
	// 	let slider = setTimeout(() => {
	// 		setIndex(index + 1);
	// 	}, 4000);
	// 	return () => {
	// 		clearInterval(slider);
	// 	};
	// }, [index]);

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

			{/* <button className='slider_prevBtn' onClick={handlePrevEvent}>
				<FiChevronLeft />
			</button>

			<button className='slider_nextBtn' onClick={handleNextEvent}>
				<FiChevronRight />
			</button> */}
		</section>
	);
}

const events = [
	{
		id: 1,
		url: "https://www.ticketfairy.com/event/nic-fanciulli-15aug2021/",
		title: "nic fanciulli, special dinner, august 15th",
		image: august_15,
	},
	{
		id: 2,
		url: "https://www.ticketfairy.com/event/nic-fanciulli-15aug2021/",
		title: "nic fanciulli, special dinner, august 15th",
		image: august_15,
	},
];

export default Event;
