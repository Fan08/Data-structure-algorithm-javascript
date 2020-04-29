/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-04-29 23:06:33
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-04-29 23:30:07
 */

function bubbleSort(array) {
    //  相邻的两个数进行比较
    //  在整个排序过程中，需要记录某次排序是否发生位置变化
    for (let i = 1; i < array.length; ++i) {
        let flag = true;
        // 从 0 位开始与后一位进行比较
        // 如果前一位大于后一位，则交换位置
        for (let j = 0; j < array.length - i; ++j) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                flag = false;
            }
        }
        //  如果某位数已经不产生位置变化，说明排序结束
        //  即使排序到最后一位，也会因为无法进入内 for 循环而不会变更 flag
        if (flag) break;
    }
    return array;
}