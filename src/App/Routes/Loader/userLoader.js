import store from '../../../redux/store';

export const userLoader = async () => {
  const state = store.getState();
  const connexion = state.user.connexion;
  if (connexion !== 'fail') {
    return connexion;
  }
  return;
};