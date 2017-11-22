export class UserService {
  constructor($http, $filter, $state, $q){
    'ngInject';
    this._http = $http;
    this._filter = $filter;
    this._q = $q;
    this._user = false;
  }

  login(user){
    return this._http.post(`${this._filter('apiUrl')('login')}`, user)
      .then(response => response.data)
      .then(user => this.user = user);
  }

  getUser(token){
    return this._http.get(`${this._filter('apiUrl')('user', token)}`)
      .then(response => response.data)
  }

  loginSession(){
    let deferred = this._q.defer();
    let token = localStorage.getItem('user');
    if(token){
      this.getUser(token)
        .then(user => {
          deferred.resolve(user);
          this.user = user;
        })
        .catch(error => deffered.reject(`Invalid user token ${error}`))
    } else {
      deferred.reject('No user token in session');
    }
    return deferred.promise;
  }

  get user(){
    return this._user;
  }

  set user(user){
    localStorage.setItem('user', user.api_token);
    this._user = user;
  }


}
