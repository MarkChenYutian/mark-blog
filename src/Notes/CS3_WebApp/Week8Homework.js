import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography, Button, Space, Alert, Slider } from 'antd';
import './Week8Homework.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';
const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
function CS3Week8HW(){
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='CS3 Week8 Homework'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
             <Game/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default CS3Week8HW;

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props){
    super(props)
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  renderRow(leftNum) {
    let row = Array();
    for (let i = 0; i < this.props.size; i ++){
      row.push(this.renderSquare(leftNum + i));
    }
    return row
  }

  render() {
    let board = Array();
    for (let i = 0; i < this.props.size; i ++){
      board.push(<div clsssName="board-row">{this.renderRow(0 + i * this.props.size)}</div>)
    }
    return (
      <div>
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      size: 5,
      history: [
        {
          squares: Array(25).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, this.state.size) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  resetHandle(){
    let mySize = this.state.size;
    this.setState({
      stepNumber: 0,
      history: [
        {
          squares: Array(mySize * mySize).fill(null)
        }
      ],
      xIsNext: true
    });
  }

  setSize(newSize){
      this.setState({
        size: newSize,
        stepNumber: 0,
        history: [
          {
            squares: Array(newSize * newSize).fill(null)
          }
        ],
        xIsNext: true
      });
  }

  updateWidth = () =>{
    this.setState({width: window.innerWidth})
  }

  componentDidMount(){
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares, this.state.size);

    const width = Math.floor(((this.state.width * 0.5) - 100) / 50);
    console.log("Board Max Width" + width);

    if (width < 6){
      return (
        <div>
          <Title>Tic-tac-toe Game</Title>
          <Text>Board Size:  </Text><Slider min={5} max={width} defaultValue={5} size="small" onChange={(value) => this.setSize(value)} style={{width: "300px"}}/>
          <Button onClick={()=>this.resetHandle()} type="primary">Reset Board</Button>
          <div style={{height: "20px"}}></div>
          <Paragraph>
          The upperbound of Board size is setup in a dynamic way, according to the window's width. In this case, the the board will not overflow.
          </Paragraph>
          <Paragraph>
          Notice that I use an event listner to detect the change of Window Size to prevent Board Overflow. 
          </Paragraph>
          <Paragraph type="danger">
          If you change the size of window when playing, ALL RECORDS WILL BE WIPED AWAY!
          </Paragraph>
          <Alert
            message="Use a Wider window to Play the Tic-tac-toe"
            description="The window of your browser is too narrow to play the tic-tac-toe. It is impossible to play tic-tac-toe that requires 5 connected chess on a chessboard smaller than 5 x 5."
            type="error"
            showIcon
          />
        </div>
      );
    }

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
          <Button key={move} onClick={() => this.jumpTo(move)}>{desc}</Button>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <body>
      <div>
          <Title>Tic-tac-toe Game</Title>
          <Text>Board Size:  </Text><Slider min={5} max={width} defaultValue={5} size="small" onChange={(value) => this.setSize(value)} style={{width: "300px"}}/>
          <Button onClick={()=>this.resetHandle()} type="primary">Reset Board</Button>
          <div style={{height: "20px"}}></div>
          <Paragraph>
          The upperbound of Board size is setup in a dynamic way, according to the window's width. In this case, the the board will not overflow.
          </Paragraph>
          <Paragraph>
          Notice that I use an event listner to detect the change of Window Size to prevent Board Overflow. 
          </Paragraph>
          <Paragraph type="danger">
          If you change the size of window when playing, ALL RECORDS WILL BE WIPED AWAY!
          </Paragraph>
      </div>
      <div className="game">
        <div className="game-board">
          <Board
            size={this.state.size}
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Space direction="vertical">{moves}</Space>
        </div>
      </div>
      </body>
    );
  }
}

// ========================================

function calculateWinner(squares, size) {
  for (let index = 0; index < squares.length; index ++){
    let hRes = checkHorizontalLine(index, size, squares);
    if (hRes != null){
      return hRes;
    }
    let vRes = checkVerticalLine(index, size, squares);
    if (vRes != null){
      return vRes;
    }
    let LRDRes = checkLRDiagnal(index, size, squares);
    if (LRDRes != null){
      return LRDRes;
    }
    let RLDRes = checkRLDiagnal(index, size, squares);
    if (RLDRes != null){
      return RLDRes;
    }
  }
  return null;
}

/*
0 0 0 0 0
0 0 0 0 0
1 1 1 1 1
0 0 0 0 0
0 0 0 0 0
*/
function checkHorizontalLine(currIndex, size, squares){
  if (Math.floor((currIndex - 2) / size) === Math.floor(currIndex / size) &&
      Math.floor((currIndex + 2) / size) === Math.floor(currIndex / size)){
      if (squares[currIndex] === squares[currIndex - 1] &&
          squares[currIndex] === squares[currIndex - 2] && 
          squares[currIndex] === squares[currIndex + 1] &&
          squares[currIndex] === squares[currIndex + 2]){
        return squares[currIndex];
      }
  }
  return null
}

/*
0 0 1 0 0
0 0 1 0 0
0 0 1 0 0
0 0 1 0 0
0 0 1 0 0
*/
function checkVerticalLine(currIndex, size, squares){
  if (currIndex - 2 * size > -1 && currIndex + 2 * size < squares.length){
    if (squares[currIndex] === squares[currIndex - 1 * size] &&
      squares[currIndex] === squares[currIndex - 2 * size] && 
      squares[currIndex] === squares[currIndex + 1 * size] &&
      squares[currIndex] === squares[currIndex + 2 * size]){
    return squares[currIndex];
  }
  }
  return null;
}

/*
1 0 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
0 0 0 0 1
*/
function checkLRDiagnal(currIndex, size, squares){
  if (Math.floor((currIndex - 2 * size) / size) === Math.floor((currIndex - 2 - 2 * size) / size) &&
      Math.floor((currIndex + 2 * size) / size) === Math.floor((currIndex + 2 + 2 * size) / size) &&
      currIndex + 2 * size < squares.length &&
      currIndex - 2 * size > -1){
        if (squares[currIndex] === squares[currIndex - 1 * size - 1] &&
          squares[currIndex] === squares[currIndex - 2 * size - 2] && 
          squares[currIndex] === squares[currIndex + 1 * size + 1] &&
          squares[currIndex] === squares[currIndex + 2 * size + 2]){
            return squares[currIndex];
        }
  }
  return null;
}

/*
0 0 0 0 1
0 0 0 1 0
0 0 1 0 0
0 1 0 0 0
1 0 0 0 0
*/
function checkRLDiagnal(currIndex, size, squares){
  if (Math.floor((currIndex - 2 * size) / size) === Math.floor((currIndex + 2 - (2 * size)) / size) &&
      Math.floor((currIndex + 2 * size) / size) === Math.floor((currIndex - 2 + (2 * size)) / size) &&
      currIndex + 2 * size < squares.length &&
      currIndex - 2 * size > -1){
        if (squares[currIndex] === squares[currIndex - 1 * size + 1] &&
          squares[currIndex] === squares[currIndex - 2 * size + 2] && 
          squares[currIndex] === squares[currIndex + 1 * size - 1] &&
          squares[currIndex] === squares[currIndex + 2 * size - 2]){
            return squares[currIndex];
        }
  }
  return null;
}