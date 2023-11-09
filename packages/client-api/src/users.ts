import { AxiosError } from 'axios';
import api from '.';

interface NewUser {
  name: string;
  email: string;
  image?: string;
}

export class UsersApi {
  public static async createUser(newUser: NewUser) {
    try {
      const response = await api.post('/users', newUser);
      return Promise.resolve(response.data);
    } catch (error) {
      const e = error as AxiosError;
      return Promise.reject(e.response?.data);
    }
  }
  public static async getUsersList() {
    try {
      const response = await api.get('/users');
      return Promise.resolve(response.data);
    } catch (error) {
      const e = error as AxiosError;
      return Promise.reject(e.response?.data);
    }
  }

  public static async updateUserById(id: string) {
    try {
      const response = await api.get(`/users/${id}`);
      return Promise.resolve(response.data);
    } catch (error) {
      const e = error as AxiosError;
      return Promise.reject(e.response?.data);
    }
  }

  public static async deleteUserById(id: string) {
    try {
      const response = await api.get(`/users/${id}`);
      return Promise.resolve(response.data);
    } catch (error) {
      const e = error as AxiosError;
      return Promise.reject(e.response?.data);
    }
  }
}
