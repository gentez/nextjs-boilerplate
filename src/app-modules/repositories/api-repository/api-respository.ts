import { apiHandler } from '../../connection/api-client';

interface ApiProps {
  token?: string;
  data?: any;
}

export const loginApi = (props: ApiProps): Promise<any> => {
  const { token, data } = props;
  return apiHandler(token).post('/api/user/login', data);
};

export const RegisterApi = (props: ApiProps): Promise<any> => {
    const { token, data } = props;
    return apiHandler(token).post('/api/user/register', data);
  };



export const getVerifyApi = (props: ApiProps): Promise<any> => {
    const { token, data } = props;
    return apiHandler(token).post('/api/verify', data);
};

export const GetAllUserApi = (props: ApiProps): Promise<any> => {
    const { token, data } = props;
    return apiHandler(token).post('/api/getuser', data);
};

