'use strict';

/**
 * @ngdoc service
 * @name app7App.rentalService
 * @description
 * # rentalService
 * Factory in the app7App.
 */
angular.module('app7App')
  .factory('rentalService', function () {
    var rentalService = {
      getRentalFee: function (item, days) {
        // ひとまずすべて新作で計算する
        return days * 300;
      }
    };

    return rentalService;
  });
