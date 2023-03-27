export let authenticate = {
    loginUser: function(id, email, userType, lastName, firstName, avatarSmallLocation) {
        const user = {
            id: id,
            email: email,
            userType: userType,
            lastName: lastName,
            firstName: firstName,
            avatarSmallLocation: avatarSmallLocation
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