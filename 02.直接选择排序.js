/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-30 19:00:50
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-30 19:19:07
 */

//  每次都将未排序元素中最小的放至已排序列表的最后面
function simpleSelectSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}