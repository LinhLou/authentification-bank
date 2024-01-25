import store from '../../../redux/store';

export const userLoader = async () => {
  const state = store.getState();
  const token = state.user.jwt;
  
  return token
};