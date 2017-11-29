import templateUrl from './app.component.html';

export const AppComponent = {
  templateUrl,
  controller: class AppComponentController{
    constructor($scope, UserService){
      'ngInject';
      this.$scope = $scope;
      this.UserService = UserService;
    }

    $onInit(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
        })

      this.$scope.$on('changeUser', (event, user) => {
        console.log(user);
        this.user = user;
      });
    }
  }
};
