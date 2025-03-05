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

test("handles new line as delimitter",()=>{
    expect(add("1\n2,3")).toBe(6)
})

test("Supports custom delimitters",()=>{
    expect(add("//;\n1;3")).toBe(4)
})

test("throw an error if a negative number is provided",()=>{
    expect(() => add("1,-2,3,-4")).toThrow("Negatives not allowed : -2,-4");
})

