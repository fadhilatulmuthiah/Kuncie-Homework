const httpLib = require('supertest');
const apKuncie = httpLib('https://api.kunciebootcampqa.com/api/bootcamp');

function getUserList() {
    return apKuncie
        .get('/users')
       
};
function deleteUser(userId) {
    return apKuncie
        .delete('/users/' + userId);
};
function getuserdetail(userId) {
    return apKuncie
       .get('/detail/users?id=' + userId);
};
function createUser() {
    return apKuncie
            .post('/users')
            .send({
                "name": "Fadhila",
                "phone_number": "085274109630",
                "address": "Depok",
                "point": 500,
                "is_registered": true,
                "vehicles": [
                    {
                        "name": "Supra - Automasi",
                        "type": "Toyota - Automasi"
                    },
                    {
                        "name": "Mobilio - Automasi",
                        "type": "Honda - Automasi"
                    }
                ]
            });
};

function createUserModel2(bodyData) {
    return apKuncie
            .post('/users')
            .send(bodyData);
};

module.exports = {
    getuserdetail,
    getUserList,
    createUser,
    createUserModel2,
    deleteUser
}