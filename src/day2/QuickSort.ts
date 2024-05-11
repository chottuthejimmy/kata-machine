export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length -1);
}

function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi)
        return;
    let pivot = partitionindex(arr, lo, hi);
    qs(arr, lo, pivot - 1);
    qs(arr, pivot + 1, hi);
}

function partitionindex(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];
    let idx = lo - 1;
    for(let i = lo; i< hi; i++){
        if(arr[i] <= pivot){
            idx++;
            const temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

