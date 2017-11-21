export class UserService {
  constructor($http, $filter){
    'ngInject';
    this._http = $http;
    this._filter = $filter;
    this.user = false;
  }

  login(user){
    return this._http.post(`${this._filter('apiUrl')('login')}`, user)
      .then(user => this.user = user.data);
  }
}
