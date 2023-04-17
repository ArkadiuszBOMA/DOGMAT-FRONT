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
		return await apiPost(api.hostCredential + api.getAllAnimals, data);
	},
	updateAnimal: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimals + data.id, data);
	},
	archiveAnimal: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllAnimals + id +"?archive");
	},
	deleteAnimal: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllAnimals + id +"?delete" );
	},

	// ANIMAL TYPE
	getAnimalTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimalTypes);
	},
	addAnimalType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAnimalTypes, data);
	},
	updateAnimalType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimalTypes + data.id + "?update", data);
	},
	archiveAnimalType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllAnimalTypes + id +"?archive");
	},
	deleteAnimalType: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllAnimalTypes + id +"?delete");
	},

	// BREED
	getBreeds: async function () {
		return await apiGet(api.hostCredential + api.getAllBreeds);
	},
	addBreeds: async function (data) {
		return await apiPost(api.hostCredential + api.getAllBreeds + data);
	},
	updateBreed: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllBreeds + data.id + "?update", data);
	},
	archiveBreed: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllBreeds + id +"?archive");
	},
	deleteBreed: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllBreeds + id +"?delete");
	},

	// VOIVODESHIP
	getVoivodeships: async function () {
		return await apiGet(api.hostCredential + api.getAllVoivodeship);
	},
	addVoivodeship: async function (data) {
		return await apiPost(api.hostCredential + api.getAllVoivodeship , data);
	},
	updateVoivodeship: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllVoivodeship + data.id + "?update", data);
	},
	archiveVoivodeship: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllVoivodeship + id +"?archive");
	},
	deleteVoivodeship: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllVoivodeship + id +"?delete");
	},

	// PROVINCES
	getProvinces: async function () {
		return await apiGet(api.hostCredential + api.getAllProvinces);
	},
	addProvince: async function (data) {
		return await apiPost(api.hostCredential + api.getAllProvinces , data);
	},
	updateProvince: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllProvinces + data.id + "?update", data);
	},
	archiveProvince: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllProvinces + id +"?archive");
	},
	deleteProvince: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllProvinces + id +"?delete");
	},

	// CITIES
	getCities: async function () {
		return await apiGet(api.hostCredential + api.getAllCities);
	},
	addCity: async function (data) {
		return await apiPost(api.hostCredential + api.getAllCities , data);
	},
	updateCity: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllCities + data.id + "?update", data);
	},
	archiveCity: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllCities + id +"?archive");
	},
	deleteCity: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllCities + id +"?delete");
	},

	// TRAINING TYPE
	getTrainingType: async function () {
		return await apiGet(api.hostCredential + api.getAllLessons);
	},
	addTrainingType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessons , data);
	},
	updateTrainingType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessons + data.id + "?update", data);
	},
	archiveTrainingType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessons + id +"?archive");
	},
	deleteTrainingType: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllLessons + id +"?delete");
	},

	// TRAINING LEVELS
	getTrainingLevels: async function () {
		return await apiGet(api.hostCredential + api.getAllTrainingLevels);
	},
	addTrainingLevel: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTrainingLevels , data);
	},
	updateTrainingLevel: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTrainingLevels + data.id + "?update", data);
	},
	archiveTrainingLevel: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTrainingLevels + id +"?archive");
	},
	deleteTrainingLevel: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllTrainingLevels + id +"?delete");
	},

	// TRAINING STEPS
	getTrainingSteps: async function () {
		return await apiGet(api.hostCredential + api.getAllLessonSteps);
	},
	addTrainingStep: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessonSteps , data);
	},
	updateTrainingStep: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessonSteps + data.id + "?update", data);
	},
	archiveTrainingStep: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessonSteps + id +"?archive");
	},
	deleteTrainingStep: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllLessonSteps + id +"?delete");
	},

	// TIME UNITS
	getTimeUnits: async function () {
		return await apiGet(api.hostCredential + api.getAllTimeUnits);
	},
	addTimeUnit: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTimeUnits , data);
	},
	updateTimeUnit: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTimeUnits + data.id + "?update", data);
	},
	archiveTimeUnit: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTimeUnits + id +"?archive");
	},
	deleteTimeUnit: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllTimeUnits + id +"?delete");
	},

	// USER TYPE
	getUserTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllUserTypes);
	},
	addUserType: async function (data) {
		return await apiPost(api.hostCredential + + api.getAllUserTypes + "/add" + data);
	},
	updateUserType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllUserTypes + data.id + "?update", data);
	},
	archiveUserType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllUserTypes + id +"?archive");
	},
	deleteUserType: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllUserTypes + id +"?delete");
	},

	// USER ROLE
	getUserRoles: async function () {
		return await apiGet(api.hostCredential + api.getAllUserRoles);
	},
	addUserRole: async function (data) {
		return await apiPost(api.hostCredential + + api.getAllUserRoles + "/add" + data);
	},
	updateUserRole: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllUserRoles + data.id + "?update", data);
	},
	archiveUserRole: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllUserRoles + id +"?archive");
	},
	deleteUserRole: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllUserRoles + id +"?delete");
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
			'Access-Control-Allow-Origin': '*',
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
			'Access-Control-Allow-Origin': '*',
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

async function apiDelete(url) {
	let response = await fetch(url, {
		method: "DELETE",
	});
	if (response.ok) {
		return response;
	}
}