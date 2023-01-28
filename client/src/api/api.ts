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
      console.log(error);
      return { data: [] as CarType[], count: 0 }
    }
  },

  createNewCar: async (name: string, color: string) => {
    try {
      const { data } = await API.post<CarType>(endpoints.garage, { name, color }, { headers: { 'Content-Type': 'application/json' } });

      return data
    } catch (error) {
      console.log(error);
      return { id: 0, name: '', color: '' };
    }
  },

  updateCar: async (id: number, name: string, color: string) => {
    try {
      const { data } = await API.put(`${endpoints.garage}/${id}`, { name, color }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      return data;
    } catch (error) {
      console.log(error);
      return { id: 0, name: '', color: '' };
    }
  },
};
