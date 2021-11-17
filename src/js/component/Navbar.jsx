import React from "react";
import "../../styles/index.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="d-flex justify-content-evenly">
				<a className="navbar-brand" href="#">
					Start Bootstrap
				</a>
				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
