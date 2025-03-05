import add from './stringCalculator'

test("return 0 for an empty string",()=>{
    expect(add("")).toBe(0);
})

test("returns the number itself for a single number string",()=>{
    expect(add("5")).toBe(5)
})

test("returns the sum of numbers separated by comma",()=>{
    expect(add("1,2,4")).toBe(7);
})

