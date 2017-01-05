"use strict";

const FS = require ('fs'),
     DATASTORE = require('nedb');

let DB = new DATASTORE({ filename: './data/forms_db.json', autoload: true });

class DataHandler {
	constructor(whichAjax, data, req, res) {
          this.file = null;
          if (whichAjax == 0) {
               this.savePDF(data);
               this.saveCSV(data);
               this.sendEmail();
          }
	}

	loadCerts() {
          const CERTS = {
               key: FS.readFileSync('./data/certs/wildcard_petoskeyschools_org.key'),
               cert: FS.readFileSync('./data/certs/wildcard_petoskeyschools_org.crt')
          };
          return CERTS;
     }

     loadCSVData(filePath, callback) {
          let fileHandle = FS.readFileSync(filePath, 'utf8');
          callback(fileHandle.toString());
     }

     getResultsJSON() {
          return FS.readFileSync('./public/views/result.json', 'utf8');
     }

     loadData(callback) {
          DB.find({}, (err, docs) => {
               if (docs.length != null) {
                    callback(docs);
               }
          });
     }

     queryData(data) {
          DB.findOne({ _id: data.id }, (err, docs) => {
               if (docs == null) {
                    this.addData(data);
               } else {
                    this.updateData(data);
               }
          });
     }

     updateData(data) {
          DB.update({ _id: data.id }, { lastName: data.lastName, firstName: data.firstName, dob: data.dob,
               age: data.age, parents: data.parents, summerAddr: data.summerAddr, email: data.email, street: data.street,
               city: data.city, state: data.state, zip: data.zip, localPhone: data.localPhone, cellPhone1: data.cellPhone1,
               cellPhone2: data.cellPhone2, sponsorLastName: data.sponsorLastName, sponsorFirstName: data.sponsorFirstName,
               sponsorPhone: data.sponsorPhone, allergies: data.allergies, allergiesList: data.allergiesList, medicalProbs: data.medicalProbs,
               emergLastName: data.emergLastName, emergFirstName: data.emergFirstName, emergPhone: data.emergPhone, adults: data.adults,
               billingName: data.billingName, cottageNum: data.cottageNum, childName: data.childName, aidPermission: data.aidPermission,
               goodHealth: data.goodHealth, adhere: data.adhere, childArrange: data.childArrange, parentSign: data.parentSign,
               parentPrint: data.parentPrint, date: data.date
          }, { upsert: true });
     }

     addData(data) {
          delete data.id;  // remove id field out of JSON parameter
          DB.insert(data);
      }
}

module.exports = DataHandler;