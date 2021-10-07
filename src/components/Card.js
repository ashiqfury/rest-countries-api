const Card = ({ data }) => {
	return (
		<div className="card">
			<div className="card__flag">
				<img src={data.flags[0]} alt={data.name.common} className="card__flag--img" />
			</div>
			<div className="card__description">
				<p className="card__description--name">{data.name.common}</p>
				<p className="card__description--qn">
					Population:
					<span className="card__description--ans">{data.population}</span>
				</p>
				<p className="card__description--qn">
					Region:
					<span className="card__description--ans">{data.region}</span>
				</p>
				<p className="card__description--qn">
					Capital:
					<span className="card__description--ans">{data.capital}</span>
				</p>
			</div>
		</div>
	);
};

export default Card;
