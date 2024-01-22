import CallsAPI from '../callsAPI';
import storeState from '../redux/storeStates';

const API = new CallsAPI('http://localhost:3001/api/v1/user');

export const  userProfileLoader = async()=>{
  const state = storeState.getState();
  const jwt = state.login.jwt;
  console.log(state.login);
  const res =  await API.getUserProfile('/profile',jwt);
  const userProfile = res.body;
  return { userProfile } 
}