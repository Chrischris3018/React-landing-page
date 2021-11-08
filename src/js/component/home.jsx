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
			<div className="containerRow">
				<Jumbotron />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
			<Footer />
		</>
	);
};

export default Home;
