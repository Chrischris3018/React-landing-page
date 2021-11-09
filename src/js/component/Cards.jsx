import React from "react";
import "../../styles/index.scss";

const Cards = () => {
	return (
		<div className="card-deck" style={{ width: "18rem" }}>
			<div className="card">
				<img
					className="card-img-top"
					src="https://source.unsplash.com/random"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div
					className="card-footer"
					style={{ alignSelf: "center", width: "auto" }}>
					<small className="btn btn-primary row">
						Find Out More!
					</small>
				</div>
			</div>
		</div>
	);
};

export default Cards;
