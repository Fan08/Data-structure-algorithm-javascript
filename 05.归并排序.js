/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-01 18:04:53
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-01 19:06:53
 */

/*
归并排序针对的是两个已经排好序的数组
通过新开辟一个数组来进行存储
*/

function merge(arr1, arr2) {
    let result = [];
    let current2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        let whetherPush = false;
        if (arr1[i] <= arr2[current2]) {
            result.push(arr1[i]);
            whetherPush = true;
        }

        while (current2 < arr2.length && arr1[i] > arr2[current2]) {
            result.push(arr2[current2])
            current2 += 1;
        }

        if (!whetherPush) {
            result.push(arr1[i])
        }
    }

    if (current2 + 1 < arr2.length) {
        result = result.concat(current2 + 1, arr2.length)
    }

    return result;
}