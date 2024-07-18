import React, { useEffect, useState } from "react";
import countries from "../Services/countries";
const Country = ({ c }) => {
	const [weather, setWeather] = useState();
	useEffect(() => {
		countries
			.getWeather(c.latlng[0], c.latlng[1])
			.then((weather) => {
				setWeather(weather);
			})
			.catch((error) => {
				console.error("Error fetching weather:", error);
			});
	}, [c]);
	return (
		<div>
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
			{weather ? (
				<div>
					<h1>Weather in {c.capital}</h1>
					<p>temperature {weather.main.temp} Celcius</p>
					{weather.weather[0].description}
					<p>
						<img
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt={`${weather.weather[0].main}`}
						/>
					</p>
					<p>wind {weather.wind.speed} m/s</p>
				</div>
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};

export const Countries = ({ countries, setSearchCountry }) => {
	const handleShow = (c) => {
		setSearchCountry(c.name.common);
	};
	return (
		<>
			{countries.length <= 10 ? (
				countries.length === 1 ? (
					countries.map((c) => <Country key={c.cca2} c={c} />)
				) : (
					countries.map((c) => (
						<div>
							<p>
								{c.name.common}{" "}
								<button onClick={() => handleShow(c)}>
									show
								</button>
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
