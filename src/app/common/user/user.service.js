export class UserService {
  constructor($rootScope, $http, $filter, $state, $q){
    'ngInject';
    this.$rootScope = $rootScope;
    this.$http = $http;
    this.$filter = $filter;
    this.$q = $q;
    this._user = false;
  }

  getUsers(){
    return this.$http.get(`${this.$filter('apiUrl')('users')}`);
  }

  getToken(){
    return this.user.token || localStorage.getItem('user');
  }

  login(user){
    return this.$http.post(`${this.$filter('apiUrl')('login')}`, user)
      .then(response => response.data)
      .then(user => this.user = user);
  }

  logout(){
    this.user = false;
    localStorage.removeItem('user');
  }

  getUser(token){
    return this.$http.get(`${this.$filter('apiUrl')('user', token)}`)
      .then(response => response.data);
  }

  getLoggedUser(){
    let deferred = this.$q.defer();
    if(this.user){
      deferred.resolve(this.user);
      return deferred.promise;
    } else {
      return this.loginSession();
    }
  }

  loginSession(){
    let deferred = this.$q.defer();
    let token = localStorage.getItem('user');
    if(token){
      this.getUser(token)
        .then(user => {
          deferred.resolve(user);
          this.user = user;
        })
        .catch(error => deferred.reject(`Invalid user token ${error}`));
    } else {
      deferred.reject('No user token in session');
    }
    return deferred.promise;
  }

  get user(){
    return this._user;
  }

  set user(user){
    this.$rootScope.$broadcast('changeUser', user);
    localStorage.setItem('user', user.api_token);
    this._user = user;
  }


}
