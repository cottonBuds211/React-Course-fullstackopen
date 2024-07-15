import React from "react";
import { useState } from "react";
import personsServices from "../Services/persons";

export const PersonForm = ({ setPersons, persons }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		//console.log(event.target);
		const newContact = {
			name: newPerson.name,
			number: newPerson.number,
			id: String(Math.floor(Math.random(1, 2000) * 1000)),
		};
		//console.log(newContact);
		const foundSame = persons.find((per) => per.name === newContact.name);
		if (foundSame) {
			const confirm = window.confirm(
				`${newContact.name} is already added to the phonebook, replace the number with a new one?`
			);
			const changedNum = { ...foundSame, number: `${newContact.number}` };

			if (confirm) {
				personsServices
					.update(foundSame.id, changedNum)
					.then((returnedPerson) => {
						setPersons(
							persons.map((p) =>
								p.id !== foundSame.id ? p : returnedPerson
							)
						);
					});
			}
		} else {
			personsServices.create(newContact).then((returnedContact) => {
				setPersons(persons.concat(returnedContact));
				setNewPerson({ name: "", number: "" });
			});
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
