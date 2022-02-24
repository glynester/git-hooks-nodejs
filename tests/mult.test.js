const mult = require('../src/mult')

it('Should correctly multiply 2 values',()=>{
  const result = mult(3,5);
  expect(result).toBe(15);
})