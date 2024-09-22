# Tree and Binary Tree Data Structures

## Description
This project implements basic data structures for n-ary trees and binary trees in JavaScript. It provides methods for various operations such as calculating sums, counting evens, finding depths, and more.

## Features
- **Tree Class**
  - `sumValues()`: Returns the sum of all integers in the tree.
  - `countEvens()`: Counts all even integers in the tree.
  - `numGreater(x)`: Counts the number of nodes greater than a given integer.

- **BinaryTree Class**
  - `minDepth()`: Finds the minimum depth of the binary tree.
  - `maxDepth()`: Finds the maximum depth of the binary tree.
  - `maxSum()`: Calculates the maximum path sum in the binary tree.
  - `nextLarger(x)`: Finds the next larger value in the binary tree.

## Installation
Simply clone the repository and include the JavaScript file in your project, or copy the classes into your own files.

## Usage
Here’s how to create a tree and use the methods:

```javascript
// Example for Tree
const root = new Tree(5);
root.children.push(new Tree(3));
root.children.push(new Tree(8));

// Example usage
console.log(root.sumValues()); // Outputs the sum of all values
console.log(root.countEvens()); // Outputs count of even values

// Example for BinaryTree
const binaryRoot = new BinaryTree(10);
binaryRoot.left = new BinaryTree(5);
binaryRoot.right = new BinaryTree(15);

// Example usage
console.log(binaryRoot.minDepth()); // Outputs the minimum depth
console.log(binaryRoot.maxSum()); // Outputs the maximum path sum