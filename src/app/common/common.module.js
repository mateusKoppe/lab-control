import angular from 'angular';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

export const CommonModule = angular
  .module('common', [
    HomeModule,
    UserModule,
  ])
  .name;
