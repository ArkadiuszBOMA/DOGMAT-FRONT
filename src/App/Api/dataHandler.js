import api from './apis.json'

export let dataHandler = {
	// get all data from DB tables
	getAppUsers: async function () {
		return await apiGet(api.hostCredential + api.getAllAppUsers);
	},

	getAnimals: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimals);
	},
	getAnimalTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimalTypes);
	},
	getBreeds: async function () {
		return await apiGet(api.hostCredential + api.getAllBreeds);
	},
	getVoivodeships: async function () {
		return await apiGet(api.hostCredential + api.getAllVoivodeship);
	},
	getProvinces: async function () {
		return await apiGet(api.hostCredential + api.getAllProvinces);
	},
	getCities: async function () {
		return await apiGet(api.hostCredential + api.getAllCities);
	},
	addNewUser: async function (data) {
	return await apiPost(api.hostCredential + api.newAppUsers, data);
	},

	loginUser: async function (data) {
		return await apiPost(api.hostCredential + api.loginAppUsers, data);
	},
}


// funkcje asynchroniczne to powtórka z JS
async function apiGet(url) {
	let response = await fetch(url, {
		method: "GET",
	});
	if (response.ok) {
		return await response.json();
	}
}

async function apiPost(url, payload) {
	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	if (response.ok) {
		return await response.json();
	}
}