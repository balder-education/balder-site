'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.LessonByClassService
 * @description
 * # LessonByClassService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('LessonByClassService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/lessons/clazz/:id', {
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
   * @name balderSiteApp.LessonService
   * @description
   * # LessonService
   * Service in the balderSiteApp.
   */
  balderSiteApp.service('LessonService', function ($resource, API_BASE_URL) {
    return $resource(API_BASE_URL + '/lessons/:id', {
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
