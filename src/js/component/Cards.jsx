import React from "react";
import "../../styles/index.scss";

const Cards = () => {
	return (
		<div className="card m-3" style={{ width: "15rem" }}>
			<img
				src="https://source.unsplash.com/random"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Find out more!
				</a>
			</div>
		</div>
	);
};

export default Cards;
