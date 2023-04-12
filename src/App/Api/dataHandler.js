import api from './apis.json'

export let dataHandler = {
	// =========================        USER     ==================
	getAppUsers: async function () {
		return await apiGet(api.hostCredential + api.getAllAppUsers);
	},
	addNewUser: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAppUsers + "/register", data);
	},
	loginUser: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAppUsers + "/login", data);
	},
	// ========================== ADMINISTRATION ===================
	// ANIMALS

	getAnimals: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimals);
	},
	addAnimal: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAnimals + "/add", data);
	},
	updateAnimal: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimals + "/update/" + data.id, data);
	},
	archiveAnimal: async function (id) {
		return await piPutNoBody(api.hostCredential + api.getAllAnimals+ "/archive/" + id);
	},

	// ANIMAL TYPE
	getAnimalTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimalTypes);
	},
	addAnimalType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAnimalTypes + "/add", data);
	},
	updateAnimalType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimalTypes + "/update/" + data.id, data);
	},
	archiveAnimalType: async function (data) {
		return await apiPutNoBody(api.hostCredential + api.getAllAnimalTypes + "/archive/" + id);
	},

	// BREED
	getBreeds: async function () {
		return await apiGet(api.hostCredential + api.getAllBreeds);
	},
	addBreeds: async function (data) {
		return await apiPost(api.hostCredential + api.getAllBreeds + "/add", data);
	},
	updateBreed: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllBreeds + "/update/" + data.id, data);
	},
	archiveBreed: async function (data) {
		return await apiPutNoBody(api.hostCredential + api.getAllBreeds + "/archive/" + id);
	},

	// VOIVODESHIP
	getVoivodeships: async function () {
		return await apiGet(api.hostCredential + api.getAllVoivodeship);
	},
	addVoivodeship: async function (data) {
		return await apiPost(api.hostCredential + api.getAllVoivodeship + "/add", data);
	},
	updateVoivodeship: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllVoivodeship + "/update/" + data.id, data);
	},
	archiveVoivodeship: async function (data) {
		return await apiPutNoBody(api.hostCredential + api.getAllVoivodeship + "/archive/" + id);
	},

	// PROVINCES
	getProvinces: async function () {
		return await apiGet(api.hostCredential + api.getAllProvinces);
	},
	addProvince: async function (data) {
		return await apiPost(api.hostCredential + api.getAllProvinces + "/add", data);
	},
	updateProvince: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllProvinces + "/update/" + data.id, data);
	},
	archiveProvince: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllProvinces + "/archive/" + id);
	},

	// CITIES
	getCities: async function () {
		return await apiGet(api.hostCredential + api.getAllCities);
	},
	addCity: async function (data) {
		return await apiPost(api.hostCredential + api.getAllCities + "/add", data);
	},
	updateCity: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllCities + "/update/" + data.id, data);
	},
	archiveCity: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllCities + "/archive/" + id);
	},

	// TRAINING TYPE
	getTrainingType: async function () {
		return await apiGet(api.hostCredential + api.getAllLessons);
	},
	addTrainingType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessons + "/add", data);
	},
	updateTrainingType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessons + "/update/" + data.id, data);
	},
	archiveTrainingType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessons + "/archive/" + id);
	},

	// TRAINING LEVELS
	getTrainingLevels: async function () {
		return await apiGet(api.hostCredential + api.getAllTrainingLevels);
	},
	addTrainingLevel: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTrainingLevels + "/add", data);
	},
	updateTrainingLevel: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTrainingLevels + "/update/" + data.id, data);
	},
	archiveTrainingLevel: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTrainingLevels + "/archive/" + id);
	},

	// TRAINING STEPS
	getTrainingSteps: async function () {
		return await apiGet(api.hostCredential + api.getAllLessonSteps);
	},
	addTrainingStep: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessonSteps + "/add", data);
	},
	updateTrainingStep: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessonSteps + "/update/" + data.id, data);
	},
	archiveTrainingStep: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessonSteps + "/archive/" + id);
	},

	// TIME UNITS
	getTimeUnits: async function () {
		return await apiGet(api.hostCredential + api.getAllTimeUnits);
	},
	addTimeUnit: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTimeUnits + "/add", data);
	},
	updateTimeUnit: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTimeUnits + "/update/" + data.id, data);
	},
	archiveTimeUnit: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTimeUnits + "/archive/" + id);
	},

	// USER TYPE
	getUserTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllUserTypes);
	},
	addUserType: async function (data) {
		return await apiPost(api.hostCredential + + api.getAllUserTypes + "/add" + data);
	},
	updateUserType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllUserTypes + "/update/" + data.id, data);
	},
	archiveUserType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllUserTypes + "/archive/" + id);
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