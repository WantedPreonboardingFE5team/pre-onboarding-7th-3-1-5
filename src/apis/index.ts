import axios from 'axios';
import { IIllness } from '../types/illness';

const URL = process.env.REACT_APP_SERVER_URL;

const fetchSearchData = async (keyword: string): Promise<IIllness[]> => {
  const response = await axios(`${URL}=${keyword}`);
  console.info('calling api');
  return response.data;
};

export default fetchSearchData;
