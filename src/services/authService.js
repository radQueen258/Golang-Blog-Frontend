import API from "/src/api/axios.js";

export const login = async (email, password) => {
    const res = await API.post('/login', { email, password });
    return res.data;
};

export const register = async (email, password) => {
    const res = await API.post('/register', { email, password });
    return res.data;
};
