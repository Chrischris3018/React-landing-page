import React from "react";
import "../../styles/index.scss";

const Jumbotron = () => {
	return (
		<div className="jumbotron bg-light mb-5 p-5 rounded">
			<h1 className="display-1">A warm welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Massa id neque aliquam vestibulum morbi blandit.
			</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a>
		</div>
	);
};

export default Jumbotron;
