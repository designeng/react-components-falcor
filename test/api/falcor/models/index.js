var app      = require('../../../../server/app.js');

var request  = require('supertest');
var apitest = request(app);
var assert = require('chai').assert;

var getResponseBody = function (response) {
    return JSON.parse(response.text)['jsonGraph']
}

describe('navigation model', function () {
    beforeEach(function () {

    });

    it('/navigation/model.json path exists, should accept get request and "items" path should return array with 3 elements', function (done) {
        apitest.get('/navigation/model.json?paths=[["items"]]&method=get')
            .expect(200)
            .end((error, response) => {
                if (error) return done(error);
                assert.equal(getResponseBody(response)['items']['value'].length, 3);
                done();
            });
    });

    it('/navigation/model.json "brands" path should return array with 3 elements', function (done) {
        apitest.get('/navigation/model.json?paths=[["brands"]]&method=get')
            .expect(200)
            .end((error, response) => {
                if (error) return done(error);
                assert.equal(getResponseBody(response)['brands']['value'].length, 5);
                done();
            });
    });

    xit('/navigation/model.json post should throw 500 error without args', function (done) {
        apitest.post('/navigation/model.json')
            .expect(500, done);
    });

    xit('/navigation/model.json should accept post request', function (done) {
        apitest.post('/navigation/model.json')
            .send({ 
                method    : 'call', 
                callPath  : ['names','add'],
                arguments : ['1234567']
            })
            .expect(200, done);
    });
});

describe('news model', function () {
    var path = '/news/model.json';

    beforeEach(function () {

    });

    it(path + ' path exists, should accept get request and "items" request should return array with 5 elements', function (done) {
        apitest.get(path + '?paths=[["top"]]&method=get')
            .expect(200)
            .end((error, response) => {
                if (error) return done(error);
                assert.equal(getResponseBody(response)['top']['value'].length, 5);
                done();
            });
    });
});