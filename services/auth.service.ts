import api from '@/axios/axios.instance';
import { UserType } from '@/types/User.type';

const jwtService = async () => {
  try {
    const res = await api.get('/auth/jwt');
    return res.data;
  } catch (error) {
    return { error: `JWT VERIFICATION ERROR: ${error}` };
  }
};

const loginService = async (data: {
  type: UserType;
  email: string;
  password: string;
  remember: boolean;
}) => {
  try {
    const res = await api.post('/auth/login', {
      type: data.type,
      email: data.email,
      password: data.password,
      remember: data.remember,
    });
    return res.data;
  } catch (error) {
    return { error: `LOGIN ERROR: ${error}` };
  }
};

const googleService = async (token: string) => {
  try {
    const res = await api.get(`/google/${token}`);
    return res.data;
  } catch (error) {
    return { error: `LOGIN ERROR: ${error}` };
  }
};

const registerService = async (data: {
  type: UserType;
  name: string;
  secteur?: string;
  email: string;
  password: string;
}) => {
  try {
    const res = await api.post('/auth/register', {
      type: data.type,
      name: data.name,
      secteur: data.secteur,
      email: data.email,
      password: data.password,
    });
    return res.data;
  } catch (error) {
    return { error: `REGISTER ERROR: ${error}` };
  }
};

const oAuthRegisterService = async (data: {
  token: string;
  password: string;
}) => {
  try {
    const res = await api.post(`/auth/register/${data.token}`, {
      password: data.password,
    });
    return res.data;
  } catch (error) {
    return { error: `OAUTH REGISTER ERROR: ${error}` };
  }
};

const logoutService = async () => {
  try {
    const res = await api.get('/auth/logout');
    return res.data;
  } catch (error) {
    return { error: `LOGOUT ERROR: ${error}` };
  }
};

export {
  jwtService,
  loginService,
  googleService,
  registerService,
  oAuthRegisterService,
  logoutService,
};
