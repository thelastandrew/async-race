import axios from 'axios';
import { Car } from '../interfaces/interfaces';

const baseURL = 'http://localhost:5000';

const endpoints = {
  garage: '/garage',
  winners: '/winners',
  engine: '/engine',
};

type GetCarsResponse = {
  data: Car[];
}

const API = axios.create({ baseURL });

export const garageAPI = {
  getCarsByPage: async (page: number, limit = 5) => {
    try {
      const { data, headers } = await API.get<GetCarsResponse>(endpoints.garage, { params: { _page: page, _limit: limit } });
      const count = Number(headers['x-total-count']);

      return {data, count};
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  },
};

garageAPI.getCarsByPage(1, 3);