const Fibonacci = require('./fibonacci');
const sinon = require('sinon');
const assert = require('assert');
// Fibonacci: o próximo valor corresponde à soma dos dois anteriores
// dado 3
// 0,1,1
// dado 5
// 0,1,1,2,3

async function test() {
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)

        // Generators retornam iterators, (.next)
        // existem 3 formas de ler os dados
        // usando as funçoes .next, for await e rest/spread

        for await (const i of fibonacci.execute(3)) {}

        // Nosso algoritimo vai começar do zero
        const expectedCallCount = 4;
        assert.deepStrictEqual(spy.callCount, expectedCallCount)
    }
    {
        const fibonacci = new Fibonacci();
        const spy = sinon.spy(fibonacci, fibonacci.execute.name)
        const [...results] = fibonacci.execute(5)
    }
}

test()