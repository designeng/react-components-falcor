var app      = require('../../../../server/app.js');

var request  = require('supertest');
var apitest = request(app);
var assert = require('chai').assert;

var getResponseBody = function (response) {
    return JSON.parse(response.text)['jsonGraph']
}

describe('navigation model', function () {
    var path = '/navigation/model.json';

    beforeEach(function () {

    });

    it(path + ' path exists, should accept get request and "items" path should return array with 3 elements', function (done) {
        apitest.get(path + '?paths=[["items"]]&method=get')
            .expect(200)
            .end((error, response) => {
                if (error) return done(error);
                assert.equal(getResponseBody(response)['items']['value'].length, 3);
                done();
            });
    });

    it(path + ' "brands" path should return array with 3 elements', function (done) {
        apitest.get(path + '?paths=[["brands"]]&method=get')
            .expect(200)
            .end((error, response) => {
                if (error) return done(error);
                assert.equal(getResponseBody(response)['brands']['value'].length, 5);
                done();
            });
    });

    xit(path + ' post should throw 500 error without args', function (done) {
        apitest.post(path)
            .expect(500, done);
    });

    xit(path + ' should accept post request', function (done) {
        apitest.post(path)
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