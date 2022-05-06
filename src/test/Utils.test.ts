import { Utils } from '../app/Utils'

describe('Utils test suite', () => {

    beforeEach(()=> {
        console.log('before each')
    })

    beforeAll(()=> {
        console.log('before all')
    })

    test('first test', () => {

        const result = Utils.toUppercase('abc')
        expect(result).toBe('ABC')

    });

    test('parse simple URL', () => {

        const parsedUrl = Utils.parseUrl('http://localhost:8080/login');

        expect(parsedUrl.href).toBe('http://localhost:8080/login');
        expect(parsedUrl.port).toBe('8080');
        expect(parsedUrl.protocol).toBe('http:')
        expect(parsedUrl.query).toEqual({})

    })

    test('parse URL with query', () => {

        const parsedUrl = Utils.parseUrl('http://localhost:8080/login?user=user&password=pass')

        const expectedQuery = {
            user: 'user',
            password: 'pass'
        }

        expect(parsedUrl.query).toEqual(expectedQuery)
        expect(expectedQuery).toEqual(expectedQuery)
    })

    // adding .only or .skip to test (test.only, test.skip) will either only run that 1 test, or skip that test (can also be used at describe.only or describe.skip)
    // .todo will not run the test and remind you in the console
    test.todo('this test still needs to be written')

    test('test invalid URL', () => {

        function expectError() {
            Utils.parseUrl('')
        }

        expect(expectError).toThrowError('Empty url!');
    })

    test('test invalid URL with arrow function', () => {

        expect(() => {
            Utils.parseUrl('')
        }).toThrow('Empty url!')
    })

    test('test invalid URL with arrow function', () => {

        try {
            Utils.parseUrl('');
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
            expect(error).toHaveProperty('message', 'Empty url!')
        }

    })

})