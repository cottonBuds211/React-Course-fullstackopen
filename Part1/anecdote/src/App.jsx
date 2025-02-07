import { useState } from "react";

function App() {
	const anecdotes = [
		"If it hurts, do it more often.",
		"Adding manpower to a late software project makes it later!",
		"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
		"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
		"Premature optimization is the root of all evil.",
		"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
		"Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
		"The only way to go fast, is to go well.",
	];

	const [selected, setSelected] = useState(0);
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
	console.log(selected)
	console.log(votes)
	//index of max vote
	//finds the position of the anecdote with the max vote
	const maxVote = votes.indexOf(Math.max(...votes));

	//console.log(maxVotes);
	//console.log(votes);

	//Clicking next button
	//Randomly selects an anecdote when next button is pressed
	const handleNext = () => {
		let max = anecdotes.length;
		let min = 0;
		let random = Math.floor(Math.random() * (max - min) + min);
		//console.log(random);
		setSelected(random);
	};

	//Handle Voting
	const handleVote = () => {
		let copy = [...votes];
		copy[selected] += 1;
		setVotes(copy);
		//console.log(votes[selected]);
	};

	return (
		<>
			<div>
				<h1>Anecdote of the day</h1>
				{anecdotes[selected]}
				<br />
				has {votes[selected]} votes
			</div>
			<Button handleClick={handleVote} text="vote" />
			<Button handleClick={handleNext} text="next anecdote" />
			<div>
				<h1>Anecdote with most vote</h1>
				{anecdotes[maxVote]}
				<br />
				has {votes[maxVote]} votes
			</div>
		</>
	);
}
const Button = (props) => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

export default App;
