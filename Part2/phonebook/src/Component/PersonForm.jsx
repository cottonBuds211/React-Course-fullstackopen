import React from "react";
import { useState } from "react";
import personsServices from "../Services/persons";

export const PersonForm = ({ setPersons, persons, setMessage }) => {
	//Submiting
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

		//If contact with the same name is found
		if (foundSame) {
			const confirm = window.confirm(
				`${newContact.name} is already added to the phonebook, replace the number with a new one?`
			);
			const changedNum = { ...foundSame, number: `${newContact.number}` };

			//If user confirmed to replace number
			if (confirm) {
				personsServices
					.update(foundSame.id, changedNum)
					.then((returnedPerson) => {
						setPersons(
							persons.map((p) =>
								p.id !== foundSame.id ? p : returnedPerson
							)
						);
					})
					.catch(() => {
						//set Notification message
						setMessage({
							message: `Information of ${foundSame.name} has already been removed from server`,
							type: "failed",
						});
						setTimeout(
							() => setMessage({ message: null, type: null }),
							3000
						);

						//filter the phonebook
						setPersons(
							persons.filter(
								(person) => person.id !== foundSame.id
							)
						);
					});
			}
		}

		//If no similar contact is in phonebook
		else {
			personsServices.create(newContact).then((returnedContact) => {
				setPersons(persons.concat(returnedContact));
				setNewPerson({ name: "", number: "" });
				setMessage({
					message: `Added ${returnedContact.name}`,
					type: "success",
				});
				setTimeout(
					() => setMessage({ message: null, type: null }),
					3000
				);
			});
		}
	};

	const [newPerson, setNewPerson] = useState({
		name: "",
		number: "",
	});

	//Changing the input
	const handleInputChange = (event) => {
		//console.log(event.target);
		const { name, value } = event.target;

		setNewPerson({
			...newPerson,
			[name]: value,
		});
	};

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
