import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";
import "../../styles/index.scss";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
