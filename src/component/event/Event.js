import React, { useState, useEffect } from "react";

import event1 from "../../assets/slider/july_25.jpeg";
import event2 from "../../assets/slider/july_31.jpeg";
import event3 from "../../assets/slider/august_04.jpeg";
import event4 from "../../assets/slider/august_07.jpeg";

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
		id: 1,
		url: "https://www.ticketfairy.com/event/paulor-31jul2021/",
		title: "paulor neo human, special dinner",
		image: event2,
	},
	{
		id: 2,
		url: "https://www.ticketfairy.com/event/whomadewho-4aug2021/",
		title: "who made who by sam sparacio, special dinner",
		image: event3,
	},
	{
		id: 3,
		url: "https://www.ticketfairy.com/event/mathame-7aug2021/",
		title: "mathame lyke neo human, special dinner",
		image: event4,
	},
];

export default Event;
