import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag, Divider } from 'antd';
import ReactMarkdown from 'react-markdown';
import math from 'remark-math';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { lightfair } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import FailImage from '../../PublicComponent/FailImage';
import AppPageHeader from '../../PublicComponent/PageHeader';const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function CS3Week8Notes(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='2'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='CS3 Week 8 Notes'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default CS3Week8Notes;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<Title level={2}>React Tutorial Notes</Title>
<Title level={3}>React Component Class</Title>
<Paragraph>A react component takes in parameters called <Text code>props</Text>, and return display items via the <Text code>render</Text> method.</Paragraph>
<Paragraph><Text code>render</Text> method will return a <Text strong>React element</Text>.</Paragraph>
<Paragraph>Usually, people use JSX syntax to describe the elements in <Text code>render</Text> method. <Text code>{`<div ... />`}</Text> will be transformed to <Text code>React.createElement('div')</Text>.</Paragraph>
<Title level={4}>Pass Parameters to Children Components</Title>
<Paragraph>Suppose we have a component</Paragraph>
<SyntaxHighlighter style={lightfair} language={'jsx'} children={`
class Example extends React.Component{
    renderText(someText){
        return <Squre text={someText}/>;
    }
}
`}/>
<Paragraph>By passing value of <Text code>someText</Text> to <Text code>{`<Squre/>`}</Text> tag, we can get the value by using <Text code>this.props.text</Text>.</Paragraph>
<SyntaxHighlighter style={lightfair} language={'jsx'} children={`
class Square extends React.Component{
    render(){ /* Notice here we don't need really pass props into render method*/
        return(
            <button className="square"/>
                {this.props.value}
            </button>
        );
    }
}
`}/>
<Title level={4}>Interactive React Components</Title>
<Paragraph>A react component will take in a <Text strong>function</Text> to handle the change (for instance, a click).</Paragraph>
<Paragraph>By adding <Text code>onClick={() => alert('click')}</Text> on the button component, we are passing an arrow function <Text code>{`() => alert(click);`}</Text> to the component.</Paragraph>
<Paragraph type="secondary">
<Paragraph>⚠ If someone forget to use arrow function here, (which is a common error), the function will be called every time the component is rendered. Though the arrow function seems redundant, we should not remove it.</Paragraph>
</Paragraph>
<Title level={4}>How Component Remember things</Title>
<Paragraph>If we want a component remember its status, we should use <Text strong>state</Text> of a component. State is <Text code>private</Text> to a react component. When we want to call the value stored in the component, we should use <Text code>this.state</Text>.</Paragraph>
<Paragraph>Before we use the <Text code>state</Text>, we should use constructor to initialize the state.</Paragraph>
<SyntaxHighlighter style={lightfair} language={'jsx'} children={`
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
`}/>
<Paragraph>To change the state of a component, we <Text strong>should NOT assign a new value on it directly</Text>. Instead, we should use function <Text code>this.setState</Text>.</Paragraph>
<Paragraph>For example, we can set the new state of component by call <Text code>setState</Text></Paragraph>
<SyntaxHighlighter style={lightfair} language={'jsx'} children={`
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
`}/>
<Paragraph>When the method <Text code>setState</Text> is called, react will re-render the component and all of its children components.</Paragraph>
<Title level={4}>Lifting State Changes to Parent Component</Title>
<Paragraph>When there are multiple components in a parent component and we want to observe the state of them all, we should put the state of children components in the parent. By doing so, we won't have to travel through all the children and access their private properties one by one.</Paragraph>
<Paragraph>As we have said before, we can use <Text code>props</Text> to pass down the parameter to children component, but how do we 'lift' the changes in children to the <Text code>state</Text> of parent components?</Paragraph>
<Paragraph>We can build a function to handle the clicks on children component and change the corresponding state.</Paragraph>
<SyntaxHighlighter style={lightfair} language={'jsx'} children={`
function clickHandle(i){
    const squares = this.state.squares.slice();
    squares[i] = 'new';
    this.setState({
        squares : squares
    })
}
`}/>
<Paragraph>Then, when we are rendering children component, we pass down the function as a <Text code>props</Text>.</Paragraph>
<Paragraph>When the children component wants to change the state on parent components, they can call the <Text code>clickHandle</Text> function in props and change the state in parent component.</Paragraph>
</Layout>
);}