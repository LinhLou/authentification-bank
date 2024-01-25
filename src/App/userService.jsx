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

    async updateProfile (jwt, newData){
      const  res = await API.updateUserProfile('/profile', jwt, {firstName:newData.firstName, lastName: newData.lastName});
      const updatedData = res.body;
      return { updatedData }
    };
}

export default  UserServices
