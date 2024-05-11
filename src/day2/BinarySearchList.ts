export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length - 1;
    do {
        let mid = Math.floor((low + high) / 2);
        if (haystack[mid] === needle) {
            return true;
        }
        if (haystack[mid] < needle) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }while (low < high);
return false;
}

// Test cases

// Path: kata-machine/src/day2/BinarySearchList.test.ts

console.log(bs_list([1, 2, 3, 4, 5], 5)); // true
