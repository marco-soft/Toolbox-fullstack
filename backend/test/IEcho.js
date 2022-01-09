//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
let should = chai.should();

chai.use(chaiHttp);

describe("IEcho", () => {
  /*
   * Test the /GET route
   */
  describe("/GET iecho", () => {
    it("it should GET the same text sent", (done) => {
      const text = "text";
      chai
        .request(server)
        .get(`/iecho?text=${text}`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.text.should.be.eql(text);
          done();
        });
    });
    it("it should GET an error because it does not have text", (done) => {
      chai
        .request(server)
        .get(`/iecho`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(400);
          res.body.should.be.a("object");
          res.body.error.should.be.eql("no text");
          done();
        });
    });
    it("it should GET palindrome true for 'Race car'", (done) => {
      const text = "Race car";
      chai
        .request(server)
        .get(`/iecho?text=${text}`)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.palindrome.should.be.eql(true);
          done();
        });
    });
  });
});
