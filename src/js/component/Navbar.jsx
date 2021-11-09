import React from "react";
import "../../styles/index.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
			<a
				className="navbar-brand"
				style={{ paddingLeft: "7rem" }}
				href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse d-flex justify-content-end"
				id="navbarNavDropdown"
				style={{ paddingRight: "7rem" }}>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Features
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Pricing
						</a>
					</li>
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-expanded="false">
							Dropdown link
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">
								Action
							</a>
							<a className="dropdown-item" href="#">
								Another action
							</a>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
