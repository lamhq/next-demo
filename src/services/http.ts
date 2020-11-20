import axios from 'axios';
import { API_URL } from '../config';

const httpService = axios.create({ baseURL: API_URL });

export default httpService;
