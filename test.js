/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-02 15:11:28
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-03 16:04:31
 */

//  file:///D:/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/js%20%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html
function test(root, expectNumber) {
    // write code here
    if (root === null) {
        return []
    }
    let paths = [];
    let lastRoot = null;

    getPath(root, 0, []);

    function getPath(childRoot, sum, path) {
        sum += childRoot.val;

        path.push(childRoot.val);
        if (expectNumber === sum && childRoot.left === null && childRoot.right === null) {
            let a = path.join('');
            paths.push(a.split(''));
        }
        if (childRoot.left !== null) {
            lastRoot = childRoot;
            getPath(childRoot.left, sum, path);
            path.pop();
        }
        if (childRoot.right !== null) {
            lastRoot = childRoot;
            getPath(childRoot.right, sum, path);
            path.pop();
        }
    }

    return paths
}