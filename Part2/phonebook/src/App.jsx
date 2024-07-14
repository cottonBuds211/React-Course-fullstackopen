import { useState } from "react";
import { PersonForm } from "./Component/PersonForm";
import Filter from "./Component/Filter";
import Persons from "./Component/Persons";
function App() {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 12 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);

	const [searchTerm, setSearchTerm] = useState("");
	const [filtered, setFiltered] = useState([]);

	return (
		<>
			<div>
				<h2>Phonebook</h2>
				<Filter
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setFiltered={setFiltered}
					persons={persons}
				/>
				<h2>Add a new</h2>
				<PersonForm setPersons={setPersons} persons={persons} />
				<h2>Numbers</h2>
				<Persons
					searchTerm={searchTerm}
					persons={persons}
					filtered={filtered}
				/>
			</div>
		</>
	);
}

export default App;
