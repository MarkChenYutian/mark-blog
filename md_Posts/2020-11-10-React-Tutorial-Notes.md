# React Tutorial Notes

[toc]

## React Component Class

A react component takes in parameters called `props`, and return display items via the `render` method.

`render` method will return a **React element**.

Usually, people use JSX syntax to describe the elements in `render` method. `<div ... />` will be transformed to `React.createElement('div')`.

### Pass Parameters to Children Components

Suppose we have a component

```jsx
class Example extends React.Component{
    renderText(someText){
        return <Squre text={someText}/>;
    }
}
```

By passing value of `someText` to `<Squre/>` tag, we can get the value by using `this.props.text`.

```jsx
class Square extends React.Component{
    render(){ /* Notice here we don't need really pass props into render method*/
    	return(
            <button className="square"/>
            	{this.props.value}
            </button>
        );
    }
}
```

### Interactive React Components

A react component will take in a **function** to handle the change (for instance, a click).

By adding `onClick={() => alert('click')}` on the button component, we are passing an arrow function `() => alert(click);` to the component.

> ⚠ If someone forget to use arrow function here, (which is a common error), the function will be called every time the component is rendered. Though the arrow function seems redundant, we should not remove it.

### How Component Remember things

If we want a component remember its status, we should use **state** of a component. State is `private` to a react component. When we want to call the value stored in the component, we should use `this.state`.

Before we use the `state`, we should use constructor to initialize the state.

```jsx
class square extends React.Component{
    constructor(props){
        super(props); /*we MUST inherit the props from React.Component class*/
        this.state = {
            props1 : value1,
            props2 : value2,
            ...
            propsn : valuen
        }
    }
}
```

To change the state of a component, we **should NOT assign a new value on it directly**. Instead, we should use function `this.setState`.

For example, we can set the new state of component by call `setState`

```jsx
render(){
    return(
        <button
            className="square"
            onClick={() => this.setState({
                props1 : 'x',
            })}
        >
        </button>
    )
}
```

When the method `setState` is called, react will re-render the component and all of its children components.

### Lifting State Changes to Parent Component

When there are multiple components in a parent component and we want to observe the state of them all, we should put the state of children components in the parent. By doing so, we won't have to travel through all the children and access their private properties one by one.

As we have said before, we can use `props` to pass down the parameter to children component, but how do we 'lift' the changes in children to the `state` of parent components?

We can build a function to handle the clicks on children component and change the corresponding state.

```jsx
function clickHandle(i){
    const squares = this.state.squares.slice();
    squares[i] = 'new';
    this.setState({
        squares : squares
    })
}
```

Then, when we are rendering children component, we pass down the function as a `props`.

When the children component wants to change the state on parent components, they can call the `clickHandle` function in props and change the state in parent component.
