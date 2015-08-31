'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getOpenAgency = getOpenAgency;
exports.init = init;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _dbcNodeBasesoapClient = require('dbc-node-basesoap-client');

var BaseSoapClient = _interopRequireWildcard(_dbcNodeBasesoapClient);

var wsdl = null;
var defaults = {};

function getOpenAgency(values) {
  var params = {
    agencyId: values.id
  };
  var openagency = BaseSoapClient.client(wsdl, defaults);
  return openagency.request('findLibrary', params, null, true);
}

var METHODS = {
  getOpenAgency: getOpenAgency
};

exports.METHODS = METHODS;
/**
 * Setting the necessary parameters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */

function init(config) {
  if (!wsdl) {
    wsdl = config.wsdl;
  }

  return METHODS;
}