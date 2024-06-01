import axios from "axios";

// Sunucudan yanit almak icin beklenecek max zaman
const TIMEOUT = 20 * 1000;

const api = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1',
    timeout: TIMEOUT,
});

export default api;