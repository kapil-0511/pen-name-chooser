const axios = require('axios');
const urlList = require('../config/urlList');

const freecodecamp = async username => {
	let result = {};
	if (username) {
		await axios
			.head(urlList.freecodecamp + username)
			.then(response => {
				if (response.status === 200) {
					result = {
						error: false,
						usernameAvailable: false,
					};
				} else {
					result = {
						error: true,
						usernameAvailable: false,
						errormessage: response.statusText,
					};
				}
			})
			.catch(error => {
				if (error.message === 'Request failed with status code 404') {
					result = {
						error: false,
						usernameAvailable: true,
					};
				} else {
					result = {
						error: true,
						usernameAvailable: false,
						errormessage: error.message,
					};
				}
			});
	} else {
		result = {
			error: true,
			usernameAvailable: false,
			errormessage: 'username not provided',
		};
	}
	console.log(result)
	return result;
};

module.exports = freecodecamp;
