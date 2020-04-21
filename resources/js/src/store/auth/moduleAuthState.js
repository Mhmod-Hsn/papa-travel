
const userDefaults = {
    id                  : 1,
    first_name          : "John",
    last_name           : "Doe",
    email               : "mohamed_swilam@hotmail.com",
    email_verified_at   : "2019-11-12 20:30:42",
    birth_date          : null,
    address             : null,
    city                : null,
    country             : null,
    phone               : null,
    gender              : null,
    image               : require("@assets/images/portrait/small/avatar-s-11.jpg"),
    created_at          : null,
    updated_at          : null,
    userRole            : "admin"
};

export default {
    AppActiveUser   : userDefaults,
    accessToken     : null
}
