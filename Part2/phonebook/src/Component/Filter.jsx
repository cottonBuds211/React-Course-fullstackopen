import React from "react";

const Filter = ({ searchTerm, setSearhTerm }) => {
	const handleSearchChange = (event) => {
		setSearhTerm(event.target.value);
	};

	return (
		<div>
			filter shown with:
			<input value={searchTerm} onChange={handleSearchChange} />
		</div>
	);
};

export default Filter;
