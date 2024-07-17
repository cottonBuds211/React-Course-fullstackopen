import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

const getAll = () => {
	const request = axios.get(`${baseUrl}/api/all`);
	return request.then((response) => response.data);
};
const get = (name) => {
	const request = axios.get(`${baseUrl}/api/name${name}`);
	return request.then((response) => response.data);
};

// const get = (id) => {
//     const request = axios.get(id)
// }
export default { getAll, get };
