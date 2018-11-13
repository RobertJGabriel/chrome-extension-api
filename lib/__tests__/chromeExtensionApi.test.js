const chromeWebsiteApi = require('../index.js');

describe('Chrome Website Api', () => {
  it('Invaild Id', () => {
    const testResult = chromeWebsiteApi
      .get('') // Helperbird Is
      .then(data => expect(data.userCount).toEqual('0'));
    return testResult;
  });
  it('Get amout of users', () => {
    const testResult = chromeWebsiteApi
      .get('ahmapmilbkfamljbpgphfndeemhnajme') // Helperbird Id
      .then(data => expect(data.userCount).toEqual('9,406'));
    return testResult;
  });
});
