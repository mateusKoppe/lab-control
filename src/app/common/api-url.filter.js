export const ApiUrlFilter = () => {
  'ngInject';
  return (input, token) => {
    let url = `http://localhost:8000/api/${input}`;
    if(token){
      url += `?api_token=${token}`;
    }
    return url;
  }
}
