import CallsAPI from '../../callsAPI';
import store from '../../../redux/store';

const API = new CallsAPI('http://localhost:3001/api/v1/user');

export const userLoader = async () => {
  const state = store.getState();
  let userData = state.login;
  if (!localStorage.getItem('userLogin')) {
    localStorage.setItem('userLogin', JSON.stringify(userData));
  } else {
    userData = JSON.parse(localStorage.getItem('userLogin'));
  }

  return { userData };
};