'use strict';

import * as OpenAgency from '../client.js';

describe('Test OpenAgency Client', () => {
  it('Asserts OpenAgency can be queried with an agency ID', function(done) {
    const timeout = 10000;
    this.timeout(timeout);
    setTimeout(done, timeout);

    const config = {
      wsdl: 'http://openagency.addi.dk/2.22/?wsdl/openagency.wsdl'
    };

    OpenAgency.init(config);
    let result = OpenAgency.getOpenAgency({
      id: '715100'
    });

    /* eslint-disable no-unused-vars */
    result.then(function(searchResult) {
    /* eslint-enable no-unused-vars */
      // Mostly used for testing during dev, not actually a unit test
      done();
    });
  });
});
