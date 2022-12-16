import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:3000/user";

class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    getUserById(userId){
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }
    // localhost:3000/user/8
    updateUser(user,userId){
        return axios.patch(USER_API_BASE_URL + '/' + userId,user);
    }

    deleteUser(userId){
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
}

export default new UserService()