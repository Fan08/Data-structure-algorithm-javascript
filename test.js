/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-02 15:11:28
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-02 17:19:42
 */

//  file:///D:/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/js%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html
function printMatrix(matrix) {
    // write code here
    let result = [];

    let leftTop = true;
    let leftBottom = false;
    let rightTop = false;
    let rightBottom = false;
    let over = false;

    // console.log(1);
    while (!over) {
        let outerLength = matrix.length;
        let innerLength = matrix[0].length;
        if (leftTop) {
            // 遍历第一行
            for (let i = 0; i < innerLength; i++) {
                result.push(matrix[0][i]);
            }
            matrix.splice(0, 1);
            leftTop = false;
            rightTop = true;
        } else if (rightTop) {
            // 遍历最后一列
            for (let i = 0; i < outerLength; i++) {
                result.push(matrix[i][innerLength - 1]);
                matrix[i].splice(innerLength - 1, 1)
            }
            rightTop = false;
            rightBottom = true;
        } else if (rightBottom) {
            // 反向遍历最后一行
            for (let i = innerLength - 1; i >= 0; i--) {
                result.push(matrix[outerLength - 1][i]);
            }
            matrix.splice(outerLength - 1, 1);
            rightBottom = false;
            leftBottom = true;
        } else if (leftBottom) {
            // 反向遍历第一列
            for (let i = outerLength - 1; i >= 0; i--) {
                result.push(matrix[i][0]);
                matrix[i].splice(0, 1)
            }
            leftBottom = false;
            leftTop = true;
        }

        for (let i = 0; i < outerLength - 1; i++) {
            if (JSON.stringify(matrix[i]) === '[]') {
                matrix.splice(i, 1)
            }
        }

        if (JSON.stringify(matrix) === '[]') {
            over = true
        }

    }

    return result;
}