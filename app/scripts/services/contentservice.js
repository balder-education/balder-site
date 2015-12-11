'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.ContentService
 * @description
 * # ContentService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('ContentByLessonService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/contents/lesson/:id', {
            id : '@id'
            }, {
            query : {
              method : 'GET',
              isArray : true,
              params : {
                id : '@id'
              }
            }
        });
});

/**
 * @ngdoc service
 * @name balderSiteApp.ContentService
 * @description
 * # ContentService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('ContentService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/contents/:id', {
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
