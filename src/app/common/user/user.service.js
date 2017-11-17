export class UserService {
  constructor($http){
    'ngInject';
    this.http = $http;
  }

  login(user){
    console.log(user);
    return this.http.post('http://localhost:8000/api/login', user);
  }
}
