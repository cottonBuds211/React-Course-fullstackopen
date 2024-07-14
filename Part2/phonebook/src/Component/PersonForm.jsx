import React from "react";
import { useState } from "react";

export const PersonForm = ({ setPersons, persons }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		//console.log(event.target);
		const newContact = {
			name: newPerson.name,
			number: newPerson.number,
			id: Math.floor(Math.random(1, 2000) * 1000),
		};
		//console.log(newContact);
		const findSame = persons.find((per) => per.name === newContact.name);

		if (findSame) {
			alert(`${newContact.name} is already added to the phonebook`);
		} else {
			setPersons(persons.concat(newContact));
			setNewPerson({ name: "", number: "" });
		}
	};
	const handleInputChange = (event) => {
		console.log(event.target);
		const { name, value } = event.target;

		setNewPerson({
			...newPerson,
			[name]: value,
		});
	};
	const [newPerson, setNewPerson] = useState({
		name: "",
		number: "",
	});

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					name:{" "}
					<input
						value={newPerson.name}
						onChange={handleInputChange}
						name="name"
					/>
				</div>
				<div>
					number:{" "}
					<input
						value={newPerson.number}
						onChange={handleInputChange}
						name="number"
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	);
};
