export const RouteCheckLoginConstant = (UserService, $state) => {
  UserService.loginSession()
    .then(data => $state.go('dashboard'));
  if(!UserService.user){
    $state.go('home');
  }
  return true;
};
