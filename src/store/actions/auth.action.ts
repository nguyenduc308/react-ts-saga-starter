import { VERIFY_TOKEN } from 'store/actionTypes/auth';

export const verifyTokenAction = (token: string): ActionRedux => ({
  type: VERIFY_TOKEN,
  payload: token,
});
