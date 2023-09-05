import { apiHandler, strapiApiHandler } from '../../connection/api-client';

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

export const strapiRegisterApi = (props: ApiProps): Promise<any> => {
  const { token, data } = props;
  return strapiApiHandler(token).post('/create-author', data);
};
export const getVerifyApi = (props: ApiProps): Promise<any> => {
    const { token, data } = props;
    return apiHandler(token).post('/api/verify', data);
};

export const GetAllUserApi = (props: ApiProps): Promise<any> => {
    const { token, data } = props;
    return apiHandler(token).post('/api/getuser', data);
};

export const ForgetPassword=(props:ApiProps):Promise<any>=>{
  const { token, data } = props;
  return apiHandler(token).post('/api/user/forgetPassword',data)
}

export const verifyOTP=(props:ApiProps):Promise<any>   =>{
  const { token, data } = props;
  return apiHandler(token).post('/api/user/verifyOTP',data)
}
export const changePasswordApi=(props:ApiProps):Promise<any>   =>{
  const { token, data } = props;
  return apiHandler(token).post('/api/user/changePassword',data)
}