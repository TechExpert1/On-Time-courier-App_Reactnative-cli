import {client} from './config';
import { client1 } from './configFD';

export const getRequest = url => client.get(url);

export const getRequestWithParams = (url, params = {}) =>
  client.get(url, params);

export const putRequestWithParams = (url, params = {}) =>
  client.put(url, params);

export const postRequest = (url, payload = {}) => client.post(url, payload);
export const postRequestWithFormData = (url, payload = {}) => client1.post(url, payload);

export const patchRequest = (url, payload = {}) => client.patch(url, payload);

export const putRequest = (url, payload = {}) => client.put(url, payload);

export const deleteRequest = (url, payload = {}) =>
  client.delete(url, {payload});
