/*
 * @Descripttion:
 * @version:
 * @Author: 唐帆
 * @Date: 2020-05-02 19:18:48
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-05-02 20:22:37
 */
/**
 * 所谓堆排序实际上就是将一个数组转为二叉堆
 * 然后通过出堆操作就可以获取一个排好序的数组
 */

function priorityQueue() {
    // 不使用 0 位
    this.node = [-1];

    this.enQueue = function (x) {
        if (this.node.length === 1) {
            this.node[1] = x;
        } else {
            let hole = this.node.length;
            this.node[hole] = x;
            // 判断新插入的元素是否大于父元素，大于则交换位置
            // 新节点的位置除 2，就是其父节点位置
            for (; hole > 1 && x > this.node[parseInt(hole / 2)]; hole = parseInt(hole / 2)) {
                this.node[hole] = this.node[parseInt(hole / 2)]
                this.node[parseInt(hole / 2)] = x
                // console.log(hole);
            }
        }
    }

    this.deQueue = function deQueue() {
        let maxItem = this.node[1];
        // 第一位和最后一位互换
        this.node[1] = this.node[this.node.length - 1];
        this.node.pop();
        this.percolateDown(1);
        return maxItem;
    }

    this.percolateDown = function (hole) {
        let child;
        let tmp = this.node[hole];
        for (; hole * 2 < this.node.length - 1; hole = child) {
            // hole * 2 就是 hole 的子节点，左子节点
            // child + 1 就是右子节点
            child = hole * 2;
            // 如果右子节点大于左子节点，就使用右子节点与之交换
            if (child !== this.node.length - 1 && this.node[child + 1] > this.node[child]) {
                child++;
            }
            // 如果子节点大于当前节点，则交换
            if (this.node[child] > tmp) this.node[hole] = this.node[child];
            else break;
        }
        this.node[hole] = tmp;
    }
}

