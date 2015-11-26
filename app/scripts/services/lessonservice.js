'use strict';

/**
 * @ngdoc service
 * @name balderSiteApp.LessonService
 * @description
 * # LessonService
 * Service in the balderSiteApp.
 */
balderSiteApp.service('LessonService', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + 'app/lessons/:id', {
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
