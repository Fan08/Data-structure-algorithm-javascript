/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-01 20:15:34
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-01 20:28:34
 */
function flattenArray(arr) {
    let newList = [];

    for (let i of arr) {
        if (!Array.isArray(i)) {
            newList.push(i);
        } else {
            let result = flattenArray(i);
            newList = newList.concat(result)
        }
    }
    return newList;
}