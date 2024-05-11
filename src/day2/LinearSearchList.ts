export default function linear_search(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return true; 
        }
    }
    return false;
}

// Test cases

// Path: kata-machine/src/day2/LinearSearchList.test.ts

// test('linear_search function', () => {
// let haystack: number[] = [1, 2, 3, 4, 5];
// expect(linear_search(haystack, 2)).toEqual(true);
// });