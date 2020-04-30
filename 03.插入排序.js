/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-30 19:12:35
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-30 19:22:47
 */

function simpleInsertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}