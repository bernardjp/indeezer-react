import axios, { AxiosRequestConfig } from 'axios';
import {
  ResourceType,
  ResourceDataList,
  APIJsonResponseType,
} from '../types/CardDisplay.types';

// REQUEST HANDLER THROUGH A HEROKU PUBLIC CORS PROXY
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const CORS_PROXY = import.meta.env.VITE_CORS_PUBLIC_PROXY;
// const configOptions: AxiosRequestConfig = {
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Method': 'GET'
//   }
// };

// const fetchAPIData = async (pathname: string) => {
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
      'x-rapidapi-key': '18e16c68ecmsh98c743985d72524p149522jsn240142df5788',
    },
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
const fetchJSONData = async (
  resourceType: ResourceType | undefined
): Promise<APIJsonResponseType | any> => {
  try {
    const jsonData = await axios.get('../../data/json-chart.json');

    if (!resourceType) {
      const mappedData = dataMapper(jsonData.data);
      const data: APIJsonResponseType = {
        resourceList: mappedData,
        // NO-NO: hardcoded implementation
        resourceType: ['albums', 'artists', 'tracks', 'playlists', 'podcasts'],
      };

      return data;
    }

    const data: APIJsonResponseType = {
      resourceList: { [resourceType]: jsonData.data[resourceType].data },
      resourceType: [resourceType],
    };

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

function dataMapper(data: any): { [key: string]: ResourceDataList } {
  const keys = Object.keys(data);
  const mappedData = keys.reduce(
    (acc, key) => ({ ...acc, [key]: data[key].data }),
    {}
  );

  return mappedData;
}

export { fetchAPIData, fetchJSONData };
