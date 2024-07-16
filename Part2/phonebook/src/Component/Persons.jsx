import personsServices from "../Services/persons";
const Person = (props) => {
	return (
		<div>
			<p>
				{props.name} {props.number}{" "}
				<button
					onClick={() => props.handleDelete(props.id, props.name)}
				>
					delete
				</button>
			</p>
		</div>
	);
};
const Persons = ({ persons, setPersons, searchTerm, setMessage }) => {
	//If user inputted a searchTerm filter the persons array
	const filteredData = searchTerm
		? persons.filter((person) =>
				person.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: persons;

	//When deleting
	const handleDelete = (id, name) => {
		if (window.confirm("Are you sure you want to delete?")) {
			personsServices
				.deletePerson(id)
				.then((personDeleted) => {
					setPersons(persons.filter((person) => person.id !== id));
					alert(`Contact ${personDeleted.name} has been deleted`);
				})
				.catch(() => {
					//When deleting a contact that is already deleted
					setMessage({
						message: `Information of ${name} has already been removed from server`,
						type: "failed",
					});
					setTimeout(
						() => setMessage({ message: null, type: null }),
						3000
					);
					setPersons(persons.filter((person) => person.id !== id));
				});
		}
	};
	return (
		<div>
			{filteredData.map((person) => (
				<Person
					key={person.id}
					id={person.id}
					name={person.name}
					number={person.number}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

export default Persons;
