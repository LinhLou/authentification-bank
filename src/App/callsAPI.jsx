
// API endpoints:
//   http://localhost:3001/api/v1/user/signup 
        // request
            // (Method: POST, 
            //  body: {
            //         "email": 'test@mail',
            //         "password":'password',
            //         "firstName": 'Linh',
            //         "lastName":'Dang'
            //        }
            // )
        // reponse : infos of new user
//   http://localhost:3001/api/v1/user/login
        // request
          // (Method: POST,
          //  body :{ 
          //          "email":'test@mail',
          //          "password":'password'
          //        }
          // )
        // reponse : token
//   http://localhost:3001/api/v1/user/profile
        // request
          // (Method: POST,
          //  header:{authorization: token}
          // )
        // reponse: user informations 
//   http://localhost:3001/api/v1/user/profile
        // request
          // (Method: POST,
          //  header:{authorization: token}
          //  body: {
          //         "firstName": 'Linh',
          //         "lastName":'Dang'
          //        }
          // )
        // reponse: user informations updated
//   http://localhost:3001/api-docs

const jsonOrThrowIfError = async (response) => {
  if (!response.ok) throw new Error((await response.json()).message);
  return await response.json();
};



class CallsAPI {
  constructor(baseURL){
    this.baseURL = baseURL;
  }
 
  async getUserToken(url, data) {
    const res = await jsonOrThrowIfError(await fetch(`${this.baseURL}${url}`, { method: "POST", headers: {
      "Content-Type": "application/json"
    },body: JSON.stringify(data) }));
    return res ;
  }

  async getUserProfile(url, jwt){
    const res = await jsonOrThrowIfError(await fetch(`${this.baseURL}${url}`, { headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${jwt}`
    }, method: "POST"}));
    return res ;
  }

}

export default CallsAPI;