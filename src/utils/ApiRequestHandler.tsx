import axios, { AxiosRequestConfig } from 'axios';

// REQUEST HANDLER THROUGH A HEROKU PUBLIC CORS PROXY
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const CORS_PROXY = import.meta.env.VITE_CORS_PUBLIC_PROXY;
// const configOptions: AxiosRequestConfig = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Method': 'GET'
//   }
// };

// const fetchData = async (pathname: string) => {
//   const URL = `${CORS_PROXY}${API_BASE_URL}/${pathname}`;
//   try {
//     const response = await axios.get(URL, configOptions);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// REQUEST HANDLER THROUGH RAPIDAPI PROXY
const fetchAPIData = async (pathname: string) => {
  const configOptions: AxiosRequestConfig = {
    method: 'GET',
    url: `https://deezerdevs-deezer.p.rapidapi.com/${pathname}`,
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': '18e16c68ecmsh98c743985d72524p149522jsn240142df5788'
    }
  };

  try {
    const response = await axios.request(configOptions);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// REQUEST DATA FROM JSON FILE
type resourceDataType = 'charts' | 'albums' | 'tracks' | 'artists' | 'playlists' | 'podcasts';

const fetchJSONData = async (resourceData: resourceDataType) => {
  try {
    const jsonData = await axios.get('../../data/json-chart.json');
    if (resourceData === 'charts') {
      return jsonData.data;
    }

    return jsonData.data[resourceData].data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { fetchAPIData, fetchJSONData };
