const Course = ({ course }) => {
	const total = Object.values(course.parts).reduce(
		(sum, { exercises }) => sum + exercises,
		0
	);
	console.log(Object.values(course.parts));
	return (
		<div>
			<Header name={course.name} />
			<Content parts={course.parts} />
			<div>
				<b>total is {total} exercises</b>
			</div>
		</div>
	);
};
const Header = ({ name }) => {
	return <h1>{name}</h1>;
};
const Content = ({ parts }) => {
	console.log(parts);
	return (
		<div>
			<Part parts={parts} />
		</div>
	);
};

const Part = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<p key={part.id}>
					{part.name} {part.exercises}
				</p>
			))}
		</>
	);
};

export default Course;
