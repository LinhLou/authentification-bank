import CallsAPI from "./callsAPI";



export const getData = async (userData) =>{
  //------------------get data from API ------------------

  const API = new CallsAPI('http://localhost:3001/api/v1/user');

  // --------------------------------------------------------
  const  res = await API.getUserToken('/login', {email:userData.email, password:userData.password});
  // console.log(res.body.token)

  // // const 
  // const profile =  await API.getUserProfile('/profile',res.body.token);
  // console.log(profile.body)

  // const updatedProfile = await API.updateUserProfile('/profile', res.body.token, {firstName:userData.firstName, lastName: userData.lastName})

  // console.log(updatedProfile.body)
  return res.body.token
  
}