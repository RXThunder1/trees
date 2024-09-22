class Tree {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    sumValues() {
        let total = this.value;
        for (let child of this.children) {
            total += child.sumValues();
        }
        return total;
    }

    countEvens() {
        let count = this.value % 2 === 0 ? 1 : 0;
        for (let child of this.children) {
            count += child.countEvens();
        }
        return count;
    }

    numGreater(x) {
        let count = this.value > x ? 1 : 0;
        for (let child of this.children) {
            count += child.numGreater(x);
        }
        return count;
    }
}

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    minDepth() {
        if (!this) return 0;
        if (!this.left && !this.right) return 1;

        let leftDepth = this.left ? this.left.minDepth() : Infinity;
        let rightDepth = this.right ? this.right.minDepth() : Infinity;

        return Math.min(leftDepth, rightDepth) + 1;
    }

    maxDepth() {
        if (!this) return 0;
        let leftDepth = this.left ? this.left.maxDepth() : 0;
        let rightDepth = this.right ? this.right.maxDepth() : 0;

        return Math.max(leftDepth, rightDepth) + 1;
    }

    maxSum() {
        if (!this) return 0;

        let leftMax = this.left ? this.left.maxSum() : 0;
        let rightMax = this.right ? this.right.maxSum() : 0;

        return Math.max(this.value, this.value + leftMax, this.value + rightMax);
    }

    nextLarger(x) {
        let result = null;

        function findLarger(node) {
            if (!node) return;

            if (node.value > x) {
                if (result === null || node.value < result) {
                    result = node.value;
                }
            }

            findLarger(node.left);
            findLarger(node.right);
        }

        findLarger(this);
        return result;
    }
}