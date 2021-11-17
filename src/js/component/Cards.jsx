import React from "react";
import "../../styles/index.scss";

const Cards = () => {
	return (
		<div className="card-deck col-3 mb-5 bb-5">
			<div className="card">
				<img
					className="card-img-top"
					src="http://via.placeholder.com/500x325"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title text-center">Card title</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
				<div className="bg-light text-center">
					<div className="card-footer">
						<small className="btn btn-primary row">
							Find Out More!
						</small>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
