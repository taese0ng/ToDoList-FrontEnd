import API from '@src/api/api';

export const signUpAPI = async () => {
  try {
    const res = await API.post('account/signup/');
    return res.data;
  } catch (e) {
    return false;
  }
};
