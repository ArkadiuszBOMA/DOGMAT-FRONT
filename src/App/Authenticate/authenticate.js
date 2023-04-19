export let authenticate = {
    loginUser: function(id, email, firstName, lastName,avatarSmallLocation, token) {
        const user = {
            id: id,
            email: email,
            fullName: firstName,
            lastName: lastName,
            avatarSmallLocation: avatarSmallLocation,
            token: token
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