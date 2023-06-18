import axios from "axios";

console.log(import.meta.env.VITE_API_KEY);

const axiosFetch = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        'Accept-Version': 'v1',
        'Authorization': `Client-ID ${import.meta.env.VITE_API_KEY}`
    }
});

export default axiosFetch;