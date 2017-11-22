import angular from 'angular';

import { ApiServiceProvider } from './api.provider';
import { ApiUrlFilter } from './api-url.filter';

export const ApiModule = angular
  .module('api', [
  ])
  .filter('apiUrl', ApiUrlFilter)
  .provider('ApiService', ApiServiceProvider)
  .name;
