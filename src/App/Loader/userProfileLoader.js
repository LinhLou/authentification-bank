import CallsAPI from '../callsAPI';
import storeState from '../redux/storeStates';

const API = new CallsAPI('http://localhost:3001/api/v1/user');

export const  userProfileLoader = async()=>{
  const state = storeState.getState();
  const userData = state.login;
  console.log(userData)
  return { userData } 
}