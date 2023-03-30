export let authenticate = {
    loginUser: function(id, email, firstName, lastName, userType, avatarSmallLocation) {
        const user = {
            id: id,
            email: email,
            fullName: firstName,
            lastName: lastName,
            userType: userType,
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