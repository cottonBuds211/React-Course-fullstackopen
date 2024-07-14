const Person = (props) => {
	return (
		<p>
			{props.name} {props.number}
		</p>
	);
};
const Persons = ({ persons, filtered, searchTerm }) => {
	return (
		<div>
			{searchTerm
				? filtered.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							number={person.number}
						/>
				  ))
				: persons.map((person) => (
						<Person
							key={person.id}
							name={person.name}
							number={person.number}
						/>
				  ))}
		</div>
	);
};

export default Persons;
