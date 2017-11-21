export const RouteCheckLoginConstant = (UserService, $state) => {
  if(!UserService.user){
    $state.go('home');
  }
  return true;
};
