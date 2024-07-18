import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";
const apiKey = import.meta.env.VITE_SOME_KEY;
const getAll = () => {
	const request = axios.get(`${baseUrl}/api/all`);
	return request.then((response) => response.data);
};
const get = (name) => {
	const request = axios.get(`${baseUrl}/api/name${name}`);
	return request.then((response) => response.data);
};

const getWeather = async (lat, long) => {
	const request = axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
	);
	return request.then((response) => response.data);
};
export default { getAll, get, getWeather };
