const {error} = require('./src/constants')
const File = require('./src/file')
const assert = require('node:assert/strict')
const {deepStrictEqual} = require('node:assert/strict')

async function test () {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, rejection)
    }
    {
        const filePath = './mocks/fourItems-invalid.csv'
        const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJson(filePath)
        await assert.rejects(result, rejection)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const result = await File.csvToJson(filePath)
        const expected = [
            {
              "id": 123,
              "name": "Erick Wendel",
              "profession": "Javascript Instuctor",
              "birthDay": 1999
            },
            {
              "id": 234,
              "name": "Xuxa da Silva",
              "profession": "Javascript Specialist",
              "birthDay": 1990
            },
            {
              "id": 345,
              "name": "Joaozinho",
              "profession": "Java Develop",
              "birthDay": 2006
            }
          ]
          deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
    }
  }
test()