const faker = require('faker');
const Car = require('./../src/entities/car')
const CarCategory = require('./../src/entities/CarCategory')
const Customer = require('./../src/entities/Customer')

const { join } = require('path')
const seederBaseFolder = join (__dirname, "../", "database")

const carCategory = new CarCategory({
    id: faker.random.uuid(),
    name: faker.vehicle.type(),
    carIds: [],
    price: faker.finance.amount(20, 100)
})