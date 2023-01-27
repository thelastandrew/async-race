import axios from 'axios';
import { CarType } from '../interfaces/interfaces';

const baseURL = 'http://localhost:5000';

const endpoints = {
  garage: '/garage',
  winners: '/winners',
  engine: '/engine',
};

const API = axios.create({ baseURL });

export const garageAPI = {
  getCarsByPage: async (page: number, limit = 5) => {
    try {
      const { data, headers } = await API.get<CarType[]>(endpoints.garage, { params: { _page: page, _limit: limit } });
      const count = Number(headers['x-total-count']);

      return { data, count };
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

  createCar: async (name: string, color: string): Promise<void> => {
    API.post(endpoints.garage, { name, color }, {
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.data);
  },
};
