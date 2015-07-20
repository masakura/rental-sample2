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

  it('旧作を二日借りると 200 円', function () {
    var result = rentalService.getRentalFee({type: 'regular'}, 2);

    expect(result).toEqual(200);
  });

  it('旧作を三日借りると 350 円', function () {
    var result = rentalService.getRentalFee({type: 'regular'}, 3);

    expect(result).toEqual(350);
  });

  it('子供向けを三日借りると 300 円', function () {
    var result = rentalService.getRentalFee({type: 'kids'}, 3);

    expect(result).toEqual(300);
  });

  it('子供向けを四日借りると 450 円', function () {
    var result = rentalService.getRentalFee({type: 'kids'}, 4);

    expect(result).toEqual(450);
  });

  // テストコードをひたすら書く...
});
