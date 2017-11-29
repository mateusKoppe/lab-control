import templateUrl from './app.component.html';

export const AppComponent = {
  templateUrl,
  controller: class AppComponentController{
    constructor(UserService){
      'ngInject';
      this.UserService = UserService;
    }

    $onInit(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
        })
    }
  }
};
