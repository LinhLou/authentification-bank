
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

  async updateUserProfile(url, [jwt, data]){
    const res = await jsonOrThrowIfError(await fetch(`${this.baseURL}${url}`, { headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${jwt}`
    }, method: "PUT", body: JSON.stringify(data)}));
    return res ;
  }

}

export default CallsAPI;