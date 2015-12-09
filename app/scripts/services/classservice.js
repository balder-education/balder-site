'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.ClassService
 * @description
 * # ClassService
 * Service in the balderSiteApp.
 */
balderSiteApp.factory('ClassService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/classes/:id', {
              id : '@id'
              }, {
              query : {
                method : 'GET',
                isArray : true
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
