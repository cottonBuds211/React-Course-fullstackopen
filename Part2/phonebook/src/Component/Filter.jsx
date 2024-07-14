import React from "react";

const Filter = ({ searchTerm, setSearchTerm, setFiltered, persons }) => {
	const handleSearchChange = (event) => {
		let searchWord = event.target.value;
		setSearchTerm(searchWord);
		filterData(searchWord);
	};
	const filterData = (searchTerm) => {
		if (searchTerm) {
			const word = searchTerm.toLowerCase();
			const filteredData = persons.filter((person) => {
				return person.name.toLowerCase().includes(word.toLowerCase());
			});
			console.log(searchTerm);
			console.log(word);
			setFiltered(filteredData);
		}
	};

	return (
		<div>
			filter shown with:
			<input value={searchTerm} onChange={handleSearchChange} />
		</div>
	);
};

export default Filter;
