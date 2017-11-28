import templateUrl from './home.component.html';
import './home.component.scss';

export const HomeComponent = {
  templateUrl,
  controller: class HomeController{
    constructor($state){
      'ngInject';
      this.$state = $state;
    }

    onLogin(user){
      this.$state.go('laboratories');
    }

    handleLoginError(error){
      alert('Fail to login');
      console.error('fail to login', error);
    }
  }
};
