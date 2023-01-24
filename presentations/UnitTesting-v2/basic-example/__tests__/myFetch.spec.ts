import { myFetch } from './../promise'

describe("myFetch", () => {
    it("should return data", () => {
        expect(myFetch("/data")).resolves.toEqual(expect.objectContaining({ data: expect.any(Array) }))
    })
})