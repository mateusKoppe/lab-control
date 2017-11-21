import angular from 'angular';

import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { ApiUrlFilter } from './api-url.filter';

export const CommonModule = angular
  .module('common', [
    HomeModule,
    UserModule,
    DashboardModule,
  ])
  .filter('apiUrl', ApiUrlFilter)
  .name;
