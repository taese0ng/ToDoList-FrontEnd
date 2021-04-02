import { atom } from 'recoil';

const userLoginStatus = atom<boolean>({
  key: 'userLoginStatus',
  default: false,
});

export { userLoginStatus };
