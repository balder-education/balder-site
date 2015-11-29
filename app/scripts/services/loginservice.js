'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.LoginService
 * @description
 * # LoginService
 * Service in the balderSiteApp.
 */
 balderSiteApp.service('LoginService', function ($resource, API_BASE_URL) {
   return $resource(API_BASE_URL + '/users/username/:username', {
               username : '@username'
     });
});
