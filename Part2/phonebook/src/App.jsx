import { useState } from "react";
import { PersonForm } from "./Component/PersonForm";
import Filter from "./Component/Filter";
import Persons from "./Component/Persons";
import axios from "axios";
import { useEffect } from "react";
function App() {
	const [persons, setPersons] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:3001/persons")
			.then((response) => setPersons(response.data));
	}, []);

	const filteredData = searchTerm
		? persons.filter((person) =>
				person.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: persons;
	return (
		<>
			<div>
				<h2>Phonebook</h2>
				<Filter searchTerm={searchTerm} setSearhTerm={setSearchTerm} />
				<h2>Add a new</h2>
				<PersonForm setPersons={setPersons} persons={persons} />
				<h2>Numbers</h2>
				<Persons filteredData={filteredData} />
			</div>
		</>
	);
}

export default App;
