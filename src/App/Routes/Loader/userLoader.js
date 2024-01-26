import store from '../../../redux/store';

export const userLoader = async () => {
  const state = store.getState();
  const status = state.user.status;
  if(status===true){
    return status
  }
  return
};