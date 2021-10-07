import React from 'react';

import Card from '../components/Card';

const Home = ({ data }) => {
	return (
		<div className="card-wrapper">
			{data.map((d, i) => (
				<Card key={i} data={d} />
			))}
		</div>
	);
};

export default Home;
