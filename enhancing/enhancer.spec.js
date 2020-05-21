const enhancer = require('./enhancer.js');
// test away!
//name, durability = 0-100, enhancement = 0-20

test('repair restores durabillity to 100', () => {
    const reparItem = {name: 'chris', durability: 50, enhancement: 10}
    const res = enhancer.repair(reparItem)
    expect(res.durability).toEqual(100)
})

test('succeed function increments enhancement by if less than 20', () => {
    const succeedItem = {name: 'david', durability:50, enhancement:20};
    const res = enhancer.succeed(succeedItem);
    if (succeedItem.enhancement >= 20){
        expect(res.enhancement).toEqual(20)
    } else {
    expect(res.enhancement).toEqual(succeedItem.enhancement + 1);
    }
})