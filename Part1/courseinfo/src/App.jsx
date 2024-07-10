function App() {
	const course = {
		course: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercise: 10,
			},
			{
				name: "Using props to pass data",
				exercise: 7,
			},
			{
				name: "State of a component",
				exercise: 14,
			},
		],
	};

	return (
		<>
			<div>
				<Header course={course.course} />
				<Content parts={course.parts} />
				<Total parts={course.parts} />
			</div>
		</>
	);
}
const Header = (props) => {
	return <h1>{props.course}</h1>;
};
const Content = (props) => {
	console.log(props);
	return (
		<div>
			{props.parts.map((part) => (
				<Part name={part.name} exercise={part.exercise} />
			))}
		</div>
	);
};

const Part = (props) => {
	console.log(props);
	return (
		<p>
			{props.name} {props.exercise}
		</p>
	);
};
const Total = (props) => {
	let sum = 0;
	const total = props.parts.map((part) => part.exercise);
	total.forEach((num) => (sum += num));

	return <p>Number of exercises {sum} </p>;
};
export default App;
