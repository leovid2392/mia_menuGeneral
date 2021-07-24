import React, { useState } from "react";

import event1 from "../../assets/slider/july_25.jpeg";
import event2 from "../../assets/slider/july_31.jpeg";
import event3 from "../../assets/slider/august_04.jpeg";
import event4 from "../../assets/slider/august_07.jpeg";

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

function Event() {
	const [event, setEvent] = useState(events);
	const [index, setIndex] = useState(0);
	const { id, title, image, url } = events[index];

	const checkNumber = (number) => {
		if (number > events.length - 1) {
			return 0;
		}
		if (number < 0) {
			return events.length - 1;
		}
		return number;
	};

	const handlePrevEvent = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	const handleNextEvent = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};
	return (
		<section className='sliderContainer'>
			<button onClick={handlePrevEvent}>
				<GrFormPrevious />
			</button>
			<a href={url} target='_blank' rel='noreferrer'>
				<figure className='slider_imgContainer'>
					<img src={image} alt={title} />
					<div className='slider_titleContainer'>
						<h4 className='slider_title'>Click me to buy</h4>
					</div>
				</figure>
			</a>
			<button onClick={handleNextEvent}>
				<GrFormNext />
			</button>
		</section>
	);
}

const events = [
	{
		id: 1,
		url: "#",
		title: "hyenah sam by sparacio, special dinner",
		image: event1,
	},
	{
		id: 2,
		url: "#",
		title: "paulor neo human, special dinner",
		image: event2,
	},
	{
		id: 3,
		url: "#",
		title: "who made who by sam sparacio, special dinner",
		image: event3,
	},
	{
		id: 4,
		url: "#",
		title: "mathame lyke neo human, special dinner",
		image: event4,
	},
];

export default Event;
