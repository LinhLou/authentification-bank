import CallsAPI from "./callsAPI";

const API = new CallsAPI('http://localhost:3001/api/v1/user');

class UserServices{

    async login(userData){
      const resToken = await API.getUserToken('/login', { email: userData.email, password: userData.password });
      const jwt = await resToken.body.token;
      const resProfile = await API.getUserProfile('/profile', jwt);
      const userProfile = await resProfile.body;
      return { jwt, userProfile };
    }

    async updateProfile (jwt, userData){
      const  res = await API.updateUserProfile('/profile', jwt, {firstName:userData.firstName, lastName: userData.lastName});
      const newData = res.body;
      return { newData }
    };
}

export default  UserServices



// export const getData = async (userData) =>{
//   //------------------get data from API ------------------

  
//   // --------------------------------------------------------
//   const  res = await API.getUserToken('/login', {email:userData.email, password:userData.password});
//   // console.log(res.body.token)

//   // // const 
//   const profile =  await API.getUserProfile('/profile',res.body.token);
//   // console.log(profile.body)

//   const updatedProfile = await API.updateUserProfile('/profile', res.body.token, {firstName:userData.firstName, lastName: userData.lastName})
//   console.log(updatedProfile)

//   // console.log(updatedProfile.body)
//   return {res, profile, updatedProfile}
  
// }