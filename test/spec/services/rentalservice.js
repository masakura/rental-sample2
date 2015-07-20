'use strict';

describe('Service: rentalService', function () {

  // load the service's module
  beforeEach(module('app7App'));

  // instantiate service
  var rentalService;
  beforeEach(inject(function (_rentalService_) {
    rentalService = _rentalService_;
  }));

  it('新作を三日借りると 900 円', function () {
    var result = rentalService.getRentalFee({type: 'new'}, 3);

    expect(result).toEqual(900);
  });
});
