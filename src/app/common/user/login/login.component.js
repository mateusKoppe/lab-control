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
    constructor($state, UserService){
      'ngInject';
      this.$state = $state;
      this.UserService = UserService;
    }

    loginSubmit(){
      this.UserService.login(this.user)
        .then(() => this.$state.go('laboratories'))
        .catch(error => {
          alert('Fail to login');
          throw new Error('fail to login', error);
        });
    }
  }
};
