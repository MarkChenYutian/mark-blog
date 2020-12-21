---
layout: post
title: Javascript Notes Week 2
tags: JavaScript
---


---

## if, else if, and else in JS

```javascript
if (condition_1){
	...
}
else if (condition_2){
    ...
}
else{
    ...
}
```

## switch in JavaScript

```Javascript
switch(expression){
    case value_1:
        //do something
        break;
    case value_2:
        //do other things
        break;
    case default:
        //do remaining things

}
```



## Array

We can put anything as the index of array. Since the `array` is in fact an Object, when we are adding one term of `1.1` as index in `array`, we are in fact adding attributes to `array`.

```javascript
let variable = [1, 2, 3];
variable[3]; //<--- return 'undefined'
variable[1.1]=3;
console.log(variable);
// [0:1, 1:2, 1.1:3, 2:3]

let i=0
while (i < variable.length){
    console.log(variable.pop());
    i ++;
}
/*
1
2
3
*/
console.log(variable);
// [1.1: 3]
```

### 6 Useful functions for Array

`array.push(obj)` will add the object at the end of array.

`array.pop()` will return the object at the end of array and remove the object at the end of array.



`array.shift()` will return the object at the beginning of array and remove the object at the beginning

`array.unshift()` will add one object at the beginning of array



`array.splice(start_index, slice_length)` will change the **array's content** and return the array that has been cut off. (inplace operation)

`array.slice(start_index, end_index)` will **NOT** change the array's content and will return the array in that range. (somehow similar to Python, slice will NOT include the element at end_index)

```javascript
let arr = [1, 2, 3]
> arr.slice(1, 1)
[]
> arr.slice(1, 2)
[2]
> arr.slice(1, 3)
[2, 3]
> arr
[1, 2, 3]


> arr.splice(1, 1)
[2]
> arr
[1, 3]
```



## Function in JavaScript

`function`  is an object in JS.

```javascript
function foo(param_1, param_2){
    // do something here
    return result;
}
```

## Operators in JavaScript
### Arithmetic Operators in JavaScript

<div class="datatable-begin"></div>

Sign |Meaning|Example  
-----|-------|---------
`/`  |Divide |`2/4=0.5`
`%`  |Modular|`5%2=1`  
`**` |Power  |`2**3=8` 

<div class="datatable-end"></div>

<br>

### Assign Operator in JavaScript

<div class="datatable-begin"></div>

Sign |Meaning                                                            |Example           |
-----|-------------------------------------------------------------------|------------------|
`=`  |Assign Value to the variable directly                              |...               |
`+=` |Add the given value on the variable directly                       |`let a=1; a += 1;`|
`-=` |Subtract the given value on the variable directly                  |...               |
...  |Each arithmetic operator has corresponding assign operator         |...               |
`++a`|The program will **First Add 1 to variable**, then return its value|...               |
`a++`|The program will **First return its value**, then add 1 to it      |...               |

<div class="datatable-end"></div>

<br>

### Comparison Operator in JavaScript

<div class="datatable-begin"></div>

Sign                |Meaning                                                                   |Example           
--------------------|--------------------------------------------------------------------------|------------------
`==`                |return True if the value are equal (even if variables have different type)|`1=='1' -> true`  
`===`               |return True if the value are equal and **type are equal**                 |`1==='1' -> false`
`!=`                |return True if `==` return False                                          |...               
`>`, `<`</br> `>=`, `<=`|the meaning of these operators should be obvious                      |...               

<div class="datatable-end"></div>

<br>

### Logical Operators

<div class="datatable-begin"></div>

Sign|Meaning                                                             |Example
----|--------------------------------------------------------------------|-------
`&&`| *Logical And*, return True if `expr1` and `expr2` both return True |...
`||`| *Logical Or*, return True if either `expr1` or `expr2` is True     |...
`!` | *Logical Not*, if ture, return false                               |...

<div class="datatable-end"></div>

<br>

In JavaScript, logical operators can be applied on everything. One common and elegant way to remove `undefined` in program is using `||` here. `undefined || value -> value`

<br>

Similarly, the operator `?` is an syntax encapsulation of `if` condition. 
```javascript
let var = expr ? value1 : value2;
// if expr == true,  var=value1;
// if expr == false, var=value2;
```
The logical operation in JavaScript can be "chained up". When the program is evaluating the expression, it will evaluate from left to right (there does not have a specific calculation order for different operator).

## Math in JavaScript
```javascript
> Math.random()
0.9108649588393491
> Math.random()
0.1597932971246665
```