/** https://leetcode.com/problems/peak-index-in-a-mountain-array/ */

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    function binarySearch(arr) {
        let index = 0;
        let left = 0;
        let right = arr.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] < arr[mid + 1]) {
                left = mid + 1;
            } else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
                right = mid;
            } else {
                index = mid;
                break;
            }
        }

        return index;
    }

    return binarySearch(arr);
};
