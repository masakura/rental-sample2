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
        if (item.type === 'new') {
          // 新作

          // 一日毎に 300 円
          return days * 300;
        } else if (item.type === 'regular') {
          // 旧作

          // 二日目までは 200 円
          var amount = 200;

          // 三日目からは一日毎に 150 円
          if (days > 2) {
            amount += (days - 2) * 150;
          }

          return amount;
        } else if (item.type === 'kids') {
          // 子供向け

          // 三日目までは 300 円
          var amountKids = 300;

          // 四日目からは一日毎に 150 円
          if (days > 3) {
            amountKids += (days - 3) * 150;
          }

          return amountKids;
        }
      }
    };

    return rentalService;
  });
