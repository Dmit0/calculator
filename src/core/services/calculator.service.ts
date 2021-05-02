import { axiosHttp } from '../utils';

export const historyAdd = async (history: string) => {
  return await axiosHttp<{ success: boolean }>('/calculator/history/add', 'PUT', JSON.stringify({ history }), {
    'Content-Type': 'application/json;charset=utf-8',
  });
}

export const historyGet = async () => {
  return await axiosHttp<{ history: string }[]>('/calculator/history/get', 'GET');
}