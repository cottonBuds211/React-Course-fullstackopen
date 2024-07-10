import { useState } from "react";

function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [total, setTotal] = useState(0);
	const [average, setAverage] = useState(0);
	const [positive, setPositive] = useState(0);

	const handleGood = () => {
		const updatedGood = good + 1;
		const total = updatedGood + bad + neutral;

		setGood(updatedGood);
		setTotal(total);
		setAverage(calculateAverage(updatedGood, neutral, bad));
		setPositive(calculatePositiveFeedBack(updatedGood, neutral, bad));
	};
	const handleNeutral = () => {
		const updatedNeutral = neutral + 1;
		const total = updatedNeutral + bad + good;

		setNeutral(updatedNeutral);
		setTotal(total);
		setAverage(calculateAverage(good, updatedNeutral, bad));
		setPositive(calculatePositiveFeedBack(good, updatedNeutral, bad));
	};
	const handleBad = () => {
		const updatedBad = bad + 1;
		const total = updatedBad + good + neutral;

		setBad(updatedBad);
		setTotal(total);
		setAverage(() => calculateAverage(good, neutral, updatedBad));
		setPositive(() => calculatePositiveFeedBack(good, neutral, updatedBad));
	};

	//Calculate Positive
	const calculatePositiveFeedBack = (good, neutral, bad) => {
		if (good === 0) {
			return 0;
		}
		const total = good + neutral + bad;
		const averagePositive = (good / total) * 100;
		return averagePositive;
	};

	//calculate average
	const calculateAverage = (good, neutral, bad) => {
		const total = good + neutral + bad;
		return (good * 1 + neutral * 0 + bad * -1) / total;
	};
	return (
		<>
			<div>
				<h1>give feedback</h1>
				<Button text={"good"} handleClick={handleGood} />
				<Button text={"neutral"} handleClick={handleNeutral} />
				<Button text={"bad"} handleClick={handleBad} />

				<h1>statistics</h1>
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					total={total}
					average={average}
					positive={positive}
				/>
			</div>
		</>
	);
}
const Statistics = (props) => {
	console.log(props);
	return (
		<table>
			<tbody>
				<StatisticLine text={"good"} value={props.good} />
				<StatisticLine text={"neutral"} value={props.neutral} />
				<StatisticLine text={"bad"} value={props.bad} />
				<StatisticLine text={"all"} value={props.total} />
				<StatisticLine text={"average"} value={props.average} />
				<StatisticLine
					text={"positive feedback"}
					value={props.positive + "%"}
				/>
			</tbody>
		</table>
	);
};
const Button = ({ handleClick, text }) => {
	return <button onClick={handleClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

export default App;
