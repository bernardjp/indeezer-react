import axios from 'axios';
import {
  ResourceType,
  ResourceDataList,
  APIJsonResponseType,
} from '../types/CardDisplay.types';

// REQUEST DATA FROM JSON FILE
const fetchJSONData = async (
  resourceType: ResourceType | undefined
): Promise<APIJsonResponseType | null> => {
  try {
    const jsonData = await axios.get('./data/json-chart.json');

    if (!resourceType) {
      const mappedData = dataMapper(jsonData.data);
      const data: APIJsonResponseType = {
        resourceList: mappedData,
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
    console.log('APIRequestHandler Error:', error);
    return null;
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

export default fetchJSONData;
