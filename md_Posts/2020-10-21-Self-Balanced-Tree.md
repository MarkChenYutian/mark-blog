---
layout: post
title: 精益求精的树模型 - 平衡树模型 | Balanced Trees
tags: Algorithm
excerpt_separator: <!--more-->
published: false
---
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script type="text/x-mathjax-config">
        MathJax.Hub.Config({
            tex2jax: {
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            inlineMath: [ ['$','$'], ["\\(","\\)"] ],
            displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
            }
        });
    </script>
    <script src="https://markchenyutian.github.io/Markchen_Blog/Asset/JavaScript/LinkCard.js"></script>
</head>
在需要大量增删查改的情况下，我们往往会使用树模型来在增删查改的时间复杂度之间取得平衡。通过最小二叉树等方法，我们可以做到在平均时间复杂度$O(\log {n})$的情况下进行增删查改（最小元素）。然而，在最坏的情况下，由于输入数据的顺序特殊，这样的树/堆模型的时间复杂度会退化至$O(n)$。为了避免树的退化导致程序时间复杂度飙升，人们通过将维护树的操作平摊到每一次增删查改中从而达到树的“自平衡”且不改变原先的 $O(\log{n})$ 时间复杂度。

<!--more-->

# 平衡树模型

## 红黑树 | Red-Black Tree

## AVL树 | AVL Tree

## 自平衡二叉搜索树 | Self-Balanced Binary Search Tree
