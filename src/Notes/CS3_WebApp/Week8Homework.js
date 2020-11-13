import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Typography } from 'antd';
import './Week8Homework.css';
import AppHeader from '../../PublicComponent/Header';
import AppFooter from '../../PublicComponent/Footer';
import AppPageHeader from '../../PublicComponent/PageHeader';
const { Content } = Layout;
const { Title } = Typography;
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

class Square extends React.Component {
    render() {
      return (
        <button
            className="square"
            onClick={() => this.props.clickFn(this.props.num)}>
            {this.props.para}
        </button>
      );
    }
  }
  
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            xIsNext: true,
            boardStatus : Array(9).fill(null)
        }
    }

    renderSquare(i) {
      return    <Square
                    num={i}
                    para={this.state.boardStatus[i]}
                    clickFn = {() => this.clickHandle(i)}
                />;
    }
  
    clickHandle(n){
        const newState = this.state.boardStatus.slice();
        newState[n] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            boardStatus : newState,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        let status = null;
        if (calculateWinner(this.state.boardStatus) === "X"){
            status = "X Wins!"
        }
        else if (calculateWinner(this.state.boardStatus) === "O"){
            status = "O Wins!"
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        );
    }
  }
  
class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
}
