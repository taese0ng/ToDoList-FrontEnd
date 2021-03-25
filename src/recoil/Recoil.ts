import { atom } from 'recoil';

export const userLoginStatus = atom<boolean>({
  key: 'userLoginStatus',
  default: false,
});
