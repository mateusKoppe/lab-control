export const ApiUrlFilter = (ApiService) => {
  'ngInject';
  return (input, token) => {
    let url = `${ApiService.url}/${input}`;
    if(token){
      url += `?api_token=${token}`;
    }
    return url;
  }
}
