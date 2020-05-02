/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-01 19:12:42
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-01 20:09:12
 */

/*
失败，严重超时
*/

function quickSort(arr, low = 0, high = arr.length - 1) {
    let mid = divide(arr, low, high);
    if (low >= high) return;
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, high);
}


function divide(a, low, high) {
    let k = a[low];
    do {
        console.log(low);
        while (low < high && a[high] >= k) --high;
        if (low < high) {
            a[low] = a[high];
            ++low;
        }
        while (low < high && a[low] <= k) ++low;
        if (low > high) {
            a[high] = a[low];
            --high;
        }
    } while (low != high)
    a[low] = k;

    return low;
}