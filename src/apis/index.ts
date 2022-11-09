import axios from 'axios';
import { IIllness } from '../types/illness';

const fetchSearchData = async (keyword: string): Promise<IIllness[]> => {
  const response = await axios(`http://localhost:4000/sick?q=${keyword}`);
  console.info('calling api');
  return response.data;
};

export default fetchSearchData;
