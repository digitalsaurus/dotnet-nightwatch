module.exports = {
  'Demo test': (client) => {
    client.url(client.launchUrl);

    client.click('.counter button');
    client.click('.counter button');
    client.click('.counter button');

    client.expect.element('.counter span').text.to.equal('3');
    
    client.end();
  }
}