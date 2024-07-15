import personsServices from "../Services/persons";
const Person = (props) => {
	return (
		<div>
			<p>
				{props.name} {props.number}{" "}
				<button onClick={() => props.handleDelete(props.id)}>
					delete
				</button>
			</p>
		</div>
	);
};
const Persons = ({ persons, setPersons, searchTerm }) => {
	const filteredData = searchTerm
		? persons.filter((person) =>
				person.name.toLowerCase().includes(searchTerm.toLowerCase())
		  )
		: persons;
	const handleDelete = (id) => {
		if (window.confirm("Are you sure you want to delete?")) {
			personsServices.deletePerson(id).then((personDeleted) => {
				setPersons(persons.filter((person) => person.id !== id));
				alert(`Contact ${personDeleted.name} has been deleted`);
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
