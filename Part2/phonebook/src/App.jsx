import { useState } from "react";
import { PersonForm } from "./Component/PersonForm";
import Filter from "./Component/Filter";
import Persons from "./Component/Persons";
import { useEffect } from "react";
import personsServices from "./Services/persons";
function App() {
	const [persons, setPersons] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		personsServices
			.getAll()
			.then((initialPersons) => setPersons(initialPersons));
	}, []);

	return (
		<>
			<div>
				<h2>Phonebook</h2>
				<Filter searchTerm={searchTerm} setSearhTerm={setSearchTerm} />
				<h2>Add a new</h2>
				<PersonForm setPersons={setPersons} persons={persons} />
				<h2>Numbers</h2>
				<Persons
					persons={persons}
					searchTerm={searchTerm}
					setPersons={setPersons}
				/>
			</div>
		</>
	);
}

export default App;
