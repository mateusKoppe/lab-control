import templateUrl from './home.component.html';
import './home.component.scss';

export const HomeComponent = {
  templateUrl,
  controller: class HomeController{
    onLogin(user){
      console.log(user);
      alert('Login with success');
    }

    handleLoginError(error){
      alert('Fail to login');
      console.error('fail to login', errr);
    }
  }
};
