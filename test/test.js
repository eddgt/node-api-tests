// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha
// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha
const { json } = require('express/lib/response');
const { JSON } = require('mocha/lib/reporters');
var request = require('supertest');
var app = require('../index.js');

// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha
describe('GET /will', function () {
    it('Respond with: Hello world', function (done) {
        request(app).get('/will').expect('{"response":"Hello World"}',done);
    });
});

// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha
describe('GET /ready', function () {
    it('Respond with: Great! it works!', function (done) {
        request(app).get('/ready').expect('{"response":"Great! it works!"}',done);
    });
});

// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha
describe('POST /areacirculo', function () {
it('should return 200 and area calculated', function (done) {    
    request(app)
     .post('/areacirculo')
     .send({ radio:8 })     
     .expect((res) => {
        let obj = res;        
        console.log("res.text "+ obj.text);        
        console.log("res.body "+ obj.body);
        console.log("res.body.message.area "+ obj.body.message.area);
       })
       .expect('{"message":{"area":201.0624}}')
       .end(function (err, res) {
            if (err) console.log( err);
            else return res;
        })
       done();       
   })
});

/*
describe("POST /areacirculo", function () {
    it("should return area of a circle", async function () {
      const response = await request(app)
        .post("/areacirculo")
        .send({ radio: 9 })  
        .expect(response.status).to.eql(200)  
      const attributes = response.body.data.attributes;
      expect(attributes).to.include.keys("area");
      expect(attributes.area).to.eql(201.06);
    });
  });
*/

/*
describe('POST /areacirculo', function () {
    it('should return area of a circle', async () => {        
        return request(app)
         .post('/areacirculo')
         .send({ radio: 9 })
         .expect(app)
         .then((res) => {
          expect(res.body).to.have.a.property('area');
         });
       });
});
*/

/*
describe('POST /areacirculo', function () {
    it('Respond with: Ok!', function () {
        request(app).post('/areacirculo').
        send({ radio: 9 }).
        expect('{"response":"area"}').
        expect(response.status).to.eql(200)
        const attributes = response.body.data.area;
        expect(attributes).to.include.keys("area")
        expect(attributes.area).to.eql(201)
    });
});
*/
// NOTA: los test solo funcionan con node 12 o 14 por la version de mocha