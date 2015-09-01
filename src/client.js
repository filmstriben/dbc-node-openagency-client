'use strict';

import * as BaseSoapClient from 'dbc-node-basesoap-client';

let wsdl = null;
let defaults = {};

function makeFindLibraryRequest (params) {
  let openagency = BaseSoapClient.client(wsdl, defaults);
  return openagency.request('findLibrary', params, null, true);
}

export function getOpenAgency(values) {
  let params = {
    agencyId: values.id
  };

  return makeFindLibraryRequest(params);
}

export function searchOpenAgency(values) {
  let params = {
    anyField: '?' + values.query + '?',
    libraryType: 'Folkebibliotek',
    pickupAllowed: 1
  };

  return makeFindLibraryRequest(params);
}

export const METHODS = {
  getOpenAgency: getOpenAgency,
  searchOpenAgency: searchOpenAgency
};

/**
 * Setting the necessary parameters for the client to be usable.
 * The wsdl is only set if wsdl is null to allow setting it through
 * environment variables.
 *
 * @param {Object} config Config object with the necessary parameters to use
 * the webservice
 */
export function init(config) {
  if (!wsdl) {
    wsdl = config.wsdl;
  }

  return METHODS;
}
