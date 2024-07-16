import { useState } from "react";
import { PersonForm } from "./Component/PersonForm";
import Filter from "./Component/Filter";
import Persons from "./Component/Persons";
import { useEffect } from "react";
import personsServices from "./Services/persons";
import { Notification } from "./Component/Notification";
function App() {
	const [persons, setPersons] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [message, setMessage] = useState({ message: null, type: null });

	useEffect(() => {
		personsServices
			.getAll()
			.then((initialPersons) => setPersons(initialPersons));
	}, []);

	return (
		<>
			<div>
				<h2>Phonebook</h2>
				<Notification message={message} />
				<Filter searchTerm={searchTerm} setSearhTerm={setSearchTerm} />
				<h2>Add a new</h2>
				<PersonForm
					setPersons={setPersons}
					persons={persons}
					setMessage={setMessage}
				/>
				<h2>Numbers</h2>
				<Persons
					persons={persons}
					searchTerm={searchTerm}
					setPersons={setPersons}
					setMessage={setMessage}
				/>
			</div>
		</>
	);
}

export default App;
