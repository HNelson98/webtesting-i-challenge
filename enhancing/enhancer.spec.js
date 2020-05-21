const enhancer = require('./enhancer.js');
// test away!
//name, durability = 0-100, enhancement = 0-20

test('repair restores durabillity to 100', () => {
    const reparItem = {name: 'chris', durability: 50, enhancement: 10}
    const res = enhancer.repair(reparItem)
    expect(res.durability).toEqual(100)
})

test('succeed function increments enhancement by if less than 20',)