import { useEffect } from "react";
import { useState } from "react";
import countries from "./Services/countries";
import { Countries } from "./Components/Countries";

function App() {
	const [countriesArray, setCountriesArray] = useState([]);
	const [searchCountry, setSearchCountry] = useState("");

	useEffect(() => {
		//using debounce function
		const getData = setTimeout(() => {
			if (searchCountry !== "") {
				countries.getAll().then((initialCountries) => {
					const filtered = initialCountries.filter((c) => {
						return (
							c.name.common
								.toLowerCase()
								.includes(searchCountry.toLowerCase()) ||
							c.cca3
								.toLowerCase()
								.includes(searchCountry.toLowerCase())
						);
					});
					console.log(searchCountry.toLowerCase());
					setCountriesArray(filtered);
					console.log(filtered);
				});
			}
		}, 1000);
		return () => clearTimeout(getData);
	}, [searchCountry]);

	const handleChange = (event) => {
		//console.log(event.target.value);
		setSearchCountry(event.target.value);
	};

	return (
		<>
			<div>
				find countries:{" "}
				<input value={searchCountry} onChange={handleChange} />
				<Countries
					countries={countriesArray}
					setSearchCountry={setSearchCountry}
				/>
			</div>
		</>
	);
}

export default App;
