---
layout: post
tags: JavaScript
title: Javascript Notes Week 5
---

## Functions of  `Array`
### Function 0: `Array.length`

```javascript
> arr = [1, 2, 3];
> arr.length;
3
```
### Function 1: `Array.sort()`

```javascript
> arr = {1, 2, 3};
> arr.sort((a, b) => a-b);
[1, 2, 3, 4, 5, 6]
> arr.sort((a, b) <= b-a);
[6, 5, 4, 3, 2, 1]
```

We can designate the way that `sort` function work. When JavaScript is sorting, it will use the **comparaFn** function provided in the `()`.

#### Compare Function in JavaScript

Usually, given `a` and `b`, the compareFn will return whether `a > b`, `a < b` or `a=b`.
By convention, if `CompareFn(a, b)` returns 1, `a > b`. If it returns 0, `a = b`. If it returns -1, `a < b`.

To make an array being sorted in a reversed order, we can declare such a comparator:
```javascript
>   function comparator(a, b){
        return b - a;
    }
>   arr = [1, 2, 3, 4, 7, 6];
>   arr.sort(comparator(a, b))
[7, 6, 4, 3, 2, 1]
```

Also, we can use the **Anonymous Function** in the sort function. The **Anonymous Function** in JavaScript is also called **Arrow Function** since it has an arrow sign `=>` in it.

When the program is being executed, the anonymous function will **Not be loaded into Memory until it is used in the program**. This will usually lead to a better performance comparing to conventioal functions declared with `function` keyword.

```javascript
> arr = [1, 3, 2, 4, 5];
> arr.sort((a, b) => b - a);
[5, 4, 3, 2, 1]
```

### Function 2: `Array.find()`
In the `find()` function, we need to input a function as the parameter. The input function will return `true` or `false`. Then, the `find` function will return the **first element in the array that cause input function to return `true`** (or return undefined if none of the elements in the array can cause input function to return true).

```javascript
> arr = [1, 3, 2, 4, 5];
> arr.find((a) => a > 2);
3
```

### Function 3: `Array.filter()`
In the `filter()` function, we need to provide a `filterFn`. The filter function will return a boolean value (or other value, since in Javascript, every object has a corresponding boolean property).
The `Array.filter()` will return a new array, composts of all the elements such that `filterFn(element) == True` in it.

```javascript
> arr = [-1, 3, 4, -2, 0, 9, -10];
> arr.filter((a) => a < 0);
[-1, -2, -10]
```

### Function 4: `Array.concat(arr2)`
Concat function represent the 'concatenation' operation in array.

```javascript
> arr = [1, 2, 3];
> arr2 = [3, 4, 5];
> arr.concat(arr2);
[1, 2, 3, 3, 4, 5]
```

### Function 5: `Array.join()`
`Array.join()` function can help one to **convert array to string**. If the parameter "seperator" is not delivered into the function, it will use a comma to seperate the elements in the array automatically.

```javascript
> arr = [1, 2, 3, 4, "test"];
> arr.join();
"1,2,3,4,test"
> arr.join("/");
"1/2/3/4/test"
> arr.join("");
"1234test"
```

### Function 6: `String.split()`
`String.split()` will need one input string as the "seperator". The input is a string and the output is an array with String elements in it.

```javascript
> str = "1,2,3,4";
> str.split();
["1,2,3,4"]
> str.split(",");
["1","2","3","4"]
```

## Functions of `String`

### Function 0: `String.toUpperCase()`

`toUpperCase` function will return a new string with all the character changed to upper case.

```javascript
> str = "abc123d";
> str.toUpperCase();
"ABC123D"
```

### Function 1: `String.localeCompare(String2)`
This function will be used to compare the strings based on their encoding code.

## Library *Date*

### Function 0: `Date.now()`

The `Date` library can provide the time and date related functions. `Date.now()` will return a number that represents the number of millisecond (ms) passed from `1970-01-01 00:00:00.000 GMT+0000`.

### Function 1: `new Date(number)`

This will create a new object that represent the time passing through `number` ms from `1970-01-01 00:00:00.000 GMT+0000`.

### Function 2: `Date.toLocaleString()`

```javascript
> time = new Date(10);
1970-01-01T00:00:00.010Z
> time.toLocalString();
'1/1/1970, 8:00:00 AM'
> a.toLocaleDateString();
'1/1/1970'
```

## Array with Objects (Reference Type)

```javascript
> arr = [{name:"a", age:1}, {name:"b", age:2}, {name:"c", age:3}];
[ { name: 'a', age: 1 }, { name: 'b', age: 2 }, { name: 'c', age: 3 } ]
> arr.find(object => object.name === "b").age;
2
> arr.sort((object1, object2) => object2.age - object1.age);
[ { name: 'c', age: 3 }, { name: 'b', age: 2 }, { name: 'a', age: 1 } ]
```