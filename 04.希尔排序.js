/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-30 19:32:26
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-30 20:02:12
 */

//  希尔排序不能保证稳定的正确输出
function shellSort(arr) {
    for (let step = parseInt(arr.length / 2); step > 0; step = parseInt(step / 2)) {
        for (let i = 1; i <= step; i++) {
            for (let j = 0; j < arr.length; j = j + step) {
                if (arr[j] > arr[j + step]) {
                    let temp = arr[j];
                    arr[j] = arr[j + step];
                    arr[j + step] = temp;
                }
            }
        }
    }
    return arr;
}