describe('karma tests with should', function() {
  var user = {
    name: 'foo'
  };
 
  it('should have a name', function() {
    user.should.have.property('name', 'foo');
  });
});
describe('自增加函数测试', function() {
 	var b = linshuizhaoying(2);
  it('正向测试,自增加结果应该为3', function() {
    b.should.be.eql(3);
  });
  it('反向测试，自增加结果不为1', function() {
    b.should.not.be.eql(1);
  });
});
