import axios, { Method } from 'axios'

export async function axiosHttp <T>(request: string, method: Method = 'GET', data?: any, headers: HeadersInit = {}, params?: any): Promise<T> {
  try {
    const response =  await axios({
      url: request,
      method,
      data,
      headers,
      params
    });
    return response.data
  } catch (error) {
    console.error(error);
    throw error.message
  }
}