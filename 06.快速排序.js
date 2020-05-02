/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-01 19:12:42
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-02 20:57:13
 */

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) return;
    let mid = divide(arr, low, high);

    // 递归至低位和高位重合
    // 类似于二分法递归至粒度为 1 时
    quickSort(arr, low, mid - 1);
    quickSort(arr, mid + 1, high);
    return arr
}


function divide(a, low, high) {
    // 选取第一位为标准值
    let key = a[low];

    // 在 low（低位） 和 high（高位）不等的情况下进入循环
    while (low < high) {
        // 在低位小于高位，高位的值大于标准值时进入循环
        while (key <= a[high] && low < high) {
            high--;
        };
        a[low] = a[high]
        a[high] = key;

        // 在低位小于高位，低位的值小于标准值时进入循环
        while (key >= a[low] && low < high) {
            low++;
        }
        a[high] = a[low]
        a[low] = key;
    }

    // 返回最终的中位
    // 即低位和高位重合位
    return low;
}