const validateEmpty = (value) => !!value.length;
const validateEmail = (email) =>
	!!email.length &&
	email
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		);

function nameChengeToCapitalLetters(value) {return value.trim().split(/ +/).join(' ').toUpperCase()}
function validateLenght(value, minName, maxName ) {return (value.length) ? value.length > minName && value.length <maxName : false}

