function findPairs(nums1, nums2, k) {
    const result = [];
    let i = 0, j = nums2.length - 1;

    // Loop to find all pairs whose sum is equal to k
    while (i < nums1.length && j >= 0) {
        const sum = nums1[i] + nums2[j];
        
        if (sum === k) {
            result.push([nums1[i], nums2[j]]);
            i++;
            j--;
        } else if (sum < k) {
            i++;
        } else {
            j--;
        }
    }
    
    return result;
}

let nums1 = [4, 5, 6, 7, 0, 1];
let nums2 = [3, 9, 10, 11, 12, 19];
let k = 13;

console.log(findPairs(nums1, nums2, k));
