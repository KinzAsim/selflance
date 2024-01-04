import {ENDPOINTS, HTTP_CLIENT, BASE_URL} from '@utils';

export const login = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.LOGIN, params);
};

export const signUp = (params: any) => {
  return HTTP_CLIENT.post(ENDPOINTS.SIGNUP, params);
};
