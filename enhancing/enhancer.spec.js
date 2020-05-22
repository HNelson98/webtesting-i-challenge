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

test('fail function passes all conditions', () => {
    const failItem = {name: 'james', durability:50, enhancement:14};
    const res = enhancer.fail(failItem);
    if(failItem.enhancement < 15){
        expect(res.durability).toEqual(failItem.durability - 5)
    } else if (failItem.enhancement >= 15 && failItem.enhancement < 17 ){
        expect(res.durability).toEqual(failItem.durability - 10)
    } else {
        expect(res.durability).toEqual(failItem.durability - 10)
        expect(res.enhancement).toEqual(failItem.enhancement - 1)
    }

})

test('get function add enhancement to name greater then 0', () => {
    const getItem = {name: 'henry', durability: 50, enhancement: 10}
    const res = enhancer.get(getItem)
    if (res.enhancement > 0){
        expect(res.name).toBe(`[+${res.enhancement}] henry`)
    }else {
        expect(res.name).toBe('henry')
    }
})