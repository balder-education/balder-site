'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.MainService
 * @description
 * # MainService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('MainService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + 'app/controls/:id', {
              id : '@id'
              }, {
              query : {
                method : 'GET',
                isArray : false
              },
              get : {
                method : 'GET'
              },
              remove : {
                method : 'DELETE',
                params : {
                  id : '@id'
                }
              },
              update : {
                method : 'PUT',
                params : {
                  id : '@id'
                }
              },
              add : {
                method : 'POST'
              }
    });
});
