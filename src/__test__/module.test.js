import { add } from "../utils/math"

const fetchAsync = () => {
    return Promise.resolve('hello')
}

describe('function hz', () => {
    test('function', async () => {
        const result = add(2, 3)
        expect(result).toBe(5)
    })

    test('function async', async () => {
        const result = await fetchAsync()
        expect(result).toBe('hello')
    })
})