import React, { useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Inputs from './components/Inputs';
// import Footer from './components/Footer';

import './css/style.css';

function App() {
	useEffect(() => {
		axios
			.get('https://restcountries.com/v3/all')
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="container">
			<Header />
			<Inputs />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
