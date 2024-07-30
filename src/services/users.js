import Api from './api'

const UsersService = {
    register: (params) => Api.post("/users/register", params),
    login: async (params) => {
        try {
            const response = await Api.post("/users/login", params);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.token);
            return response.data; 
        } catch (error) {
            console.error('Login failed:', error);
            throw error; 
        }
    }
}

export default UsersService;
