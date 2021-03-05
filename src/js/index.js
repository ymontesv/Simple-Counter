//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//IMPORTAR
import PropTypes from "prop-types";
//
import "bootstrap";
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="card text-center bg-dark text-primary">
			<div className="d-flex justify-content-center">
				<div className="car-hearder">
					<i className="far fa-clock" />
				</div>
				<div className="display-3">{props.digitOne}</div>
				<div className="display-3">{props.digitTwo}</div>
				<div className="display-3">{props.digitThree}</div>
				<div className="display-3">{props.digitFour}</div>
				<div className="display-3">{props.digitFive}</div>
				<div className="display-3">{props.digitSix}</div>
			</div>
		</div>
	);
}

SimpleCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
	//adicionar props
};

let contador = 0;

setInterval(function() {
	//adicionar logica del reloj enviar como parametro al SimpleCounter

	let one = Math.floor(contador / 100000);
	let two = Math.floor(contador / 10000);
	let three = Math.floor(contador / 1000);
	let four = Math.floor(contador / 100);
	let five = Math.floor(contador / 10);
	let six = contador;
	contador++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,

		document.querySelector("#app")
	);
}, 1000);
