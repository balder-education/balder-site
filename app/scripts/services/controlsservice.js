'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.ControlsService
 * @description
 * # ControlsService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('LeftMenuService', function($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/controls/menus/:id', {
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

/**
 * @ngdoc service
 * @name balderSiteApp.ControlsService
 * @description
 * # ControlsService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('AdminMenuService', function($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/controls/admin-menus/:id', {
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
