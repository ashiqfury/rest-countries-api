import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import Loading from './pages/Loading';
import './css/style.css';

const App = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const fetch = async () => {
		try {
			await axios.get('https://restcountries.com/v3/all').then((res) => setData(res.data));
		} catch (err) {
			setError(err ? true : false);
		}
	};

	useEffect(() => {
		fetch();
		setLoading(false);
	}, []);

	return (
		<div className="container">
			<Header />
			{loading ? <Loading /> : error ? <Error /> : <Home data={data} />}
		</div>
	);
};

export default App;
