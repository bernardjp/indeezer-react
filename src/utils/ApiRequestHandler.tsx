import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CORS_PROXY = import.meta.env.VITE_CORS_PUBLIC_PROXY;
const configOptions = {
  headers: { 'Access-Control-Allow-Origin': '*' }
};

const fetchData = async (pathname: string) => {
  const URL = `${CORS_PROXY}${API_BASE_URL}/${pathname}`;

  try {
    const response = await axios.get(URL, configOptions);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default fetchData;
