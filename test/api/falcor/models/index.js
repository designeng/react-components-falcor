var app      = require('../../../../server/app.js');

var request  = require('supertest');
var apitest = request(app);

describe('integration', function () {
    beforeEach(function () {

    });

    it('/navigation/model.json path exists and should accept get request', function (done) {
        apitest.get('/navigation/model.json?paths=[["names","length"]]&method=get').expect(200, done);
    });

    it('/navigation/model.json post should throw 500 error without args', function (done) {
        apitest.post('/navigation/model.json')
            .expect(500, done);
    });

    it('/navigation/model.json should accept post request', function (done) {
        apitest.post('/navigation/model.json')
            .send({ 
                method    : 'call', 
                callPath  : ['names','add'],
                arguments : ['1234567']
            })
            .expect(200, done);
    });
});