import React from "react";

const Country = ({ c }) => {
	return (
		<div key={c.cca2}>
			<h1>{c.name.common}</h1>
			<p>
				capital {c.capital}
				<br /> area: {c.area}
			</p>
			<br />
			<b>languages</b>
			<ul>
				{Object.values(c.languages).map((c) => (
					<li key={c}>{c}</li>
				))}
			</ul>
			<img
				src={c.flags.svg}
				alt={c.flags.alt}
				style={{ width: "400px" }}
			/>
		</div>
	);
};

export const Countries = ({ countries }) => {
	return (
		<>
			{countries.length <= 10 ? (
				countries.length === 1 ? (
					countries.map((c) => <Country c={c} />)
				) : (
					countries.map((c) => (
						<div key={c.cca2}>
							<p>
								{c.name.common} <button>show</button>
							</p>
						</div>
					))
				)
			) : (
				<div>Too many matches, specify another filter</div>
			)}
		</>
	);
};
