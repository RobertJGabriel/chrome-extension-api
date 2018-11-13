'use strict';
var request = require('request');
let url =
  'https://chrome.google.com/webstore/ajax/detail?hl=en-US&gl=GR&pv=20181009&mce=atf%2Cpii%2Crtr%2Crlb%2Cgtc%2Chcn%2Csvp%2Cwtd%2Cnrp%2Chap%2Cnma%2Cnsp%2Cdpb%2Cc3d%2Cncr%2Cctm%2Cac%2Chot%2Cmac%2Cfcf%2Crma&container=CHROME&_reqid=127898&rt=j';

function get(id) {
  if (typeof id !== 'string') return 'Not an string';
  let object = {
    message: '',
    userCount: '0',
    extra: ''
  };

  let chromeResponse = new Promise(function(resolve, reject) {
    request.post(
      {
        url: `${url}&id=${id}`
      },
      function(error, httpResponse, body) {
        if (error) {
          object.message = 'error';
          object.extra = error;
          return reject(error);
        }

        let cleanJson = body.substr(4);
        cleanJson = JSON.parse(cleanJson);
        // So this is odd, the response here at postion returns 404
        if (cleanJson[0][0][5] === 404) {
          object.message = 'success';
          object.extra = 'no chrome extension found';
          return resolve(object);
        }

        let userCount = cleanJson[0][1][1][0][23]; // So this is odd, the response here at postion returns the user amounts.
        object.message = 'success';
        object.userCount = userCount;
        object.extra = cleanJson;
        return resolve(object);
      }
    );
  });
  return chromeResponse
    .then(function(value) {
      return value;
    })
    .catch(function(error) {
      return error;
    });
}

exports.get = get;
