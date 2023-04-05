import api from './apis.json'

export let dataHandler = {
	// =========================        USER     ==================
	getAppUsers: async function () {
		return await apiGet(api.hostCredential + api.getAllAppUsers);
	},
	addNewUser: async function (data) {
		return await apiPost(api.hostCredential + api.newAppUsers, data);
	},
	loginUser: async function (data) {
		return await apiPost(api.hostCredential + api.loginAppUsers, data);
	},
	// ========================== ADMINISTRATION ===================
	getAnimalTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimalTypes);
	},
	addAnimalTypes: async function () {
		return await apiPost(api.hostCredential + api.getAllAnimalTypes);
	},
	updateAnimalTypes: async function () {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimalTypes);
	},
	archiveAnimalTypes: async function () {
		return await apiPutNoBody(api.hostCredential + api.getAllAnimalTypes);
	},
	getBreeds: async function () {
		return await apiGet(api.hostCredential + api.getAllBreeds);
	},
	addBreeds: async function () {
		return await apiPost(api.hostCredential + api.getAllBreeds);
	},
	getVoivodeships: async function () {
		return await apiGet(api.hostCredential + api.getAllVoivodeship);
	},
	addVoivodeships: async function () {
		return await apiPost(api.hostCredential + api.getAllVoivodeship);
	},
	getProvinces: async function () {
		return await apiGet(api.hostCredential + api.getAllProvinces);
	},
	addProvinces: async function () {
		return await apiPost(api.hostCredential + api.getAllProvinces);
	},
	getCities: async function () {
		return await apiGet(api.hostCredential + api.getAllCities);
	},
	addCities: async function () {
		return await apiPost(api.hostCredential + api.getAllCities);
	},
	getTrainingType: async function () {
		return await apiGet(api.hostCredential + api.getAllLessons);
	},
	addTrainingType: async function () {
		return await apiPost(api.hostCredential + api.getAllLessons);
	},
	getTrainingLevels: async function () {
		return await apiGet(api.hostCredential + api.getAllTrainingLevels);
	},
	addTrainingLevels: async function () {
		return await apiPost(api.hostCredential + api.getAllTrainingLevels);
	},
	getTrainingSteps: async function () {
		return await apiGet(api.hostCredential + api.getAllLessonSteps);
	},
	addTrainingSteps: async function () {
		return await apiPost(api.hostCredential + api.getAllLessonSteps);
	},
	getTimeUnits: async function () {
		return await apiGet(api.hostCredential + api.getAllTimeUnits);
	},
	addTimeUnits: async function () {
		return await apiPost(api.hostCredential + api.getAllTimeUnits);
	},
	getUserTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllUserTypes);
	},
	addUserTypes: async function () {
		return await apiPost(api.hostCredential + api.getAllUserTypes);
	},

	// ========================= OBSŁYGA KONTA USER   ==================

	getAnimals: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimals);
	},
	addAnimals: async function () {
		return await apiPost(api.hostCredential + api.getAllAnimals);
	},

}


// ========================= ASYNCHRONICZNE FUNKCJE   ==================
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

async function apiPutWithBody(url, payload) {
	let response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	if (response.ok) {
		return await response.json();
	}
}

async function apiPutNoBody(url) {
	let response = await fetch(url, {
		method: "PUT",
	});
	if (response.ok) {
		return response;
	}
}