import api from './apis.json'
import {authenticate} from "../Authenticate/authenticate";

export let dataHandler = {
	// =========================        USER     ==================
	getAppUsers: async function () {
		return await apiGet(api.hostCredential + api.getAllAppUsers);
	},
	addNewUser: async function (data) {
		return await apiLoginRegister(api.hostCredential + api.getAllAppUsers + "/register", data);
	},
	loginUser: async function (data) {
		return await apiLoginRegister(api.hostCredential + api.getAllAppUsers + "/login", data);
	},
	archiveAppUser: async function (id){
		return await apiPutNoBody(api.hostCredential + api.getAllAppUsers + "/"+ id + "?archive");
	},
	// ========================== ADMINISTRATION ===================
	// ANIMALS

	getAnimals: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimals);
	},
	addAnimal: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAnimals , data);
	},
	updateAnimal: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimals+ "?update", data);
	},
	archiveAnimal: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllAnimals + "/"+ id +"?archive");
	},
	deleteAnimal: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllAnimals  + "/"+ id);
	},

	// ANIMAL TYPE
	getAnimalTypes: async function () {
		return await apiGet(api.hostCredential + api.getAllAnimalTypes);
	},
	addAnimalType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllAnimalTypes , data);
	},
	updateAnimalType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllAnimalTypes+ "?update", data);
	},
	archiveAnimalType: async function (id) {
		console.log("tutaj jestem")
		return await apiPutNoBody(api.hostCredential + api.getAllAnimalTypes + "/"+ id +"?archive");
	},
	deleteAnimalType: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllAnimalTypes + "/"+ id);
	},

	// BREED
	getBreeds: async function () {
		return await apiGet(api.hostCredential + api.getAllBreeds);
	},
	addBreeds: async function (data) {
		return await apiPost(api.hostCredential + api.getAllBreeds , data);
	},
	updateBreed: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllBreeds+ "?update", data);
	},
	archiveBreed: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllBreeds + "/"+ id +"?archive");
	},
	deleteBreed: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllBreeds + "/"+ id);
	},

	// CARE ANNOUNCEMENT
	getCareAnnouncements: async function () {
		return await apiGet(api.hostCredential + api.getAllCareAnnouncementTypes);
	},
	addCareAnnouncement: async function (data) {
		return await apiPost(api.hostCredential + api.getAllCareAnnouncementTypes, data);
	},
	updateCareAnnouncement: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllCareAnnouncementTypes+ "?update", data);
	},
	archiveCareAnnouncement: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllCareAnnouncementTypes + "/"+ id +"?archive");
	},
	deleteCareAnnouncement: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllCareAnnouncementTypes + "/"+ id);
	},

	// VOIVODESHIP
	getVoivodeships: async function () {
		return await apiGet(api.hostCredential + api.getAllVoivodeship);
	},
	addVoivodeship: async function (data) {
		return await apiPost(api.hostCredential + api.getAllVoivodeship , data);
	},
	updateVoivodeship: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllVoivodeship+ "?update", data);
	},
	archiveVoivodeship: async function (id) {
		console.log(api.hostCredential + api.getAllVoivodeship + "/"+ id +"?archive")
		return await apiPutNoBody(api.hostCredential + api.getAllVoivodeship + "/"+ id +"?archive");
	},
	deleteVoivodeship: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllVoivodeship + "/"+ id);
	},

	// PROVINCES
	getProvinces: async function () {
		return await apiGet(api.hostCredential + api.getAllProvinces);
	},
	addProvince: async function (data) {
		return await apiPost(api.hostCredential + api.getAllProvinces , data);
	},
	updateProvince: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllProvinces+ "?update", data);
	},
	archiveProvince: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllProvinces + "/"+ id +"?archive");
	},
	deleteProvince: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllProvinces + "/"+ id);
	},

	// CITIES
	getCities: async function () {
		return await apiGet(api.hostCredential + api.getAllCities);
	},
	addCity: async function (data) {
		return await apiPost(api.hostCredential + api.getAllCities , data);
	},
	updateCity: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllCities+ "?update", data);
	},
	archiveCity: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllCities + "/"+ id +"?archive");
	},
	deleteCity: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllCities + "/"+ id);
	},

	// TRAINING TYPE
	getTrainingType: async function () {
		return await apiGet(api.hostCredential + api.getAllLessons);
	},
	addTrainingType: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessons , data);
	},
	updateTrainingType: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessons+ "?update", data);
	},
	archiveTrainingType: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessons + "/"+ id +"?archive");
	},
	deleteTrainingType: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllLessons + "/"+ id);
	},

	// TRAINING LEVELS
	getTrainingLevels: async function () {
		return await apiGet(api.hostCredential + api.getAllTrainingLevels);
	},
	addTrainingLevel: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTrainingLevels , data);
	},
	updateTrainingLevel: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTrainingLevels+ "?update", data);
	},
	archiveTrainingLevel: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTrainingLevels + "/"+ id +"?archive");
	},
	deleteTrainingLevel: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllTrainingLevels + "/"+ id);
	},

	// TRAINING STEPS
	getTrainingSteps: async function () {
		return await apiGet(api.hostCredential + api.getAllLessonSteps);
	},
	addTrainingStep: async function (data) {
		return await apiPost(api.hostCredential + api.getAllLessonSteps , data);
	},
	updateTrainingStep: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllLessonSteps+ "?update", data);
	},
	archiveTrainingStep: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllLessonSteps + "/"+ id +"?archive");
	},
	deleteTrainingStep: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllLessonSteps + "/"+ id);
	},

	// TIME UNITS
	getTimeUnits: async function () {
		return await apiGet(api.hostCredential + api.getAllTimeUnits);
	},
	addTimeUnit: async function (data) {
		return await apiPost(api.hostCredential + api.getAllTimeUnits , data);
	},
	updateTimeUnit: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllTimeUnits+ "?update", data);
	},
	archiveTimeUnit: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllTimeUnits + "/"+ id +"?archive");
	},
	deleteTimeUnit: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllTimeUnits + "/"+ id);
	},

	// USER ROLE
	getUserRoles: async function () {
		return await apiGet(api.hostCredential + api.getAllUserRoles);
	},
	addUserRole: async function (data) {
		return await apiPost(api.hostCredential + + api.getAllUserRoles, + data);
	},
	updateUserRole: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllUserRoles+ "?update", data);
	},
	archiveUserRole: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllUserRoles + "/"+ id +"?archive");
	},
	deleteUserRole: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllUserRoles + "/"+ id);
	},

	// USER PRIVILEGES
	getUserPrivileges: async function () {
		return await apiGet(api.hostCredential + api.getAllUserPrivileges);
	},
	addUserPrivilege: async function (data) {
		return await apiPost(api.hostCredential + + api.getAllUserPrivileges, + data);
	},
	updateUserPrivilege: async function (data) {
		return await apiPutWithBody(api.hostCredential + api.getAllUserPrivileges+ "?update", data);
	},
	archiveUserPrivilege: async function (id) {
		return await apiPutNoBody(api.hostCredential + api.getAllUserPrivileges + "/"+ id +"?archive");
	},
	deleteUserPrivilege: async function (id) {
		return await apiDelete(api.hostCredential + api.getAllUserPrivileges + "/"+ id);
	},
}


// ========================= ASYNCHRONICZNE FUNKCJE   ==================
async function apiGet(url) {
	const token = authenticate.getAppUser().token;
	let response = await fetch(url, {
		method: "GET",
		headers: {
			'Authorization': `Bearer ${token}`
		}
	});
	if (response.ok) {
		return await response.json();
	}
}

async function apiLoginRegister(url, payload) {
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

async function apiPost(url, payload) {
	const token = authenticate.getAppUser().token;
	let response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(payload),
	});
	if (response.ok) {
		return await response.json();
	}
}

async function apiPutWithBody(url, payload) {
	const token = authenticate.getAppUser().token;
	let response = await fetch(url, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(payload),
	});
	if (response.ok) {
		return await response.json();
	}
}

async function apiPutNoBody(url) {
	const token = authenticate.getAppUser().token;
	let response = await fetch(url, {
		method: "PUT",
		headers: {
			'Authorization': `Bearer ${token}`
		},
	});
	if (response.ok) {
		return response;
	}
}

async function apiDelete(url) {
	const token = authenticate.getAppUser().token;
	let response = await fetch(url, {
		method: "DELETE",
		headers: {
			'Authorization': `Bearer ${token}`
		},
	});
	if (response.ok) {
		return response;
	}
}