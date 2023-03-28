export let authenticate = {
    loginUser: function(email, password) {
        const user = {
            email: email,
            password: password,
        };
        sessionStorage.setItem("user", JSON.stringify(user))
    },
    logoutUser: function() {
      sessionStorage.clear();
    },
    getAppUser: function() {
        const userJson = sessionStorage.getItem("user");
        return userJson ? JSON.parse(userJson) : null;
    }
}