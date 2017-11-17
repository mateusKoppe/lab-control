import templateUrl from './login.component.html';
import './login.component.scss';

export const LoginComponent = {
  bindings: {
    onLoginSuccess: '&',
    onLoginError: '&',
  },
  transclude: false,
  templateUrl,
  controller: class LoginController {
    constructor(UserService){
      'ngInject';
      this.userService = UserService;
    }

    login(){
      this.userService.login(this.user)
        .then(data => this.onLoginSuccess({user: data}))
        .catch(error => this.onLoginError({error}))
      ;
    }
  }
};
