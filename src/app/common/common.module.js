import angular from 'angular';

import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';

export const CommonModule = angular
  .module('common', [
    HomeModule,
    UserModule,
    DashboardModule,
  ])
  .name;
