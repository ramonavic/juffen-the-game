var expect = require('chai').expect;
var app = require('./index');

describe ('juf', function (){
  describe('isJuf', function(){
    it('should return true for numbers that contain 7 or are divisble by 7', function(){
      expect(app.isJuf(1)).to.equal(false)
      expect(app.isJuf(7)).to.equal(true)
      expect(app.isJuf(14)).to.equal(true)
      expect(app.isJuf(87)).to.equal(true)
    })
  });
});
