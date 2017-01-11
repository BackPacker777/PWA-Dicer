"use strict";

const FS = require ('fs');

class DataHandler {
	constructor() {

	}

	loadCerts() {
          const CERTS = {
               key: FS.readFileSync('./data/certs/wildcard_petoskeyschools_org.key'),
               cert: FS.readFileSync('./data/certs/wildcard_petoskeyschools_org.crt')
          };
          return CERTS;
     }
}

module.exports = DataHandler;