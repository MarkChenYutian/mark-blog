---
layout: post
title: Javascript Notes Week 3
tags: JavaScript
---

## Javascript Notes 3

### `while` Loop
```javascript
while(condition){
    //do something
}
```
The program in `while` will be executed repeatedly when `condition == true`.

<br>

### `for` Loop
other than `while` loop, we can also use `for` loop in the program.
```javascript
for (exec1; exec2; exec3){
    // do something
}
```
For three `exec` in for loop, they will be executed in different time:
<div class="datatable-begin"></div>

Command|Runtime 
-------|---------
`exec1`|The line will be executed **before loop start**
`exec2`|The line will be a **condition** that determine whether the loop will go on
`exec3`|The line will be executed **everytime after loop is executed**

<div class="datatable-end"></div>

<br>

```javascript
for (let i=0; i < 10; i ++){
    //do something
} 
```
When we doesn't add `let` before the declaration of variable `i` in for loop, the variable will be leaked. (If `let` is not added, the `var` will be added as default and the variable `i` will be seen as *global variable*)


<br>

### `do ... while` Loop
The program in `do ... while` loop will execute the code in `do` block while the condition in `while` is true.
```javascript
do{
    // do something
}
while(condition);
```

<br>

### `for of` Loop
This loop is usually used to travel through the array.
```javascript
let arr = [1, 2, 3, 4, 5];
for (const element in arr){
    console.log(element);
}
```

Expect Output:

```
1
2
3
4
5
```
