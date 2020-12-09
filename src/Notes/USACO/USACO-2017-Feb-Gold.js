import React from 'react';
import '../../App.css';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import '../../index.css';
import { Image, Layout, PageHeader, Typography, Space, Tag, Divider, Collapse } from 'antd';
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
const { Panel } = Collapse;
const PhotoLink = process.env.PUBLIC_URL + '/Assets/';
function USACO2017FebGoldAnalysis(props){
   window.scrollTo(0,0);
   return(
       <Layout>
           <AppHeader select='3'/>
           <Content className='site-layout' style={{ padding: '0 24px', marginTop: 64 }}>
           <AppPageHeader title='USACO 2017 Feb Gold Analysis'/>
           <div className='site-layout-background' style={{ padding: 16 }}>
              <PostContent/>
           </div>
           </Content>
           <AppFooter/>
        </Layout>
   );
}
export default USACO2017FebGoldAnalysis;
function PostContent(){
 return(<Layout style={{ backgroundColor: 'white', padding: '0'}}>
<Title level={3}>Problem 1. Why did the Cow Cross the Road</Title>
<Title level={4}>Problem Description</Title>
<Paragraph>Bessie the cow wants to move from the upper-left corner of field to the bottom-right corner of field. Each time it goes from one grid to the other, <em><InlineMath math='T'/> unit</em> of time will be consumed. Each time Bessie pass through 3 grids, she will stop at the grid and begin eating. The time of eating in each grid is different and will be provided in the input.</Paragraph>
<Paragraph><InlineMath math='3 \leq N \leq 100, 0\leq T\leq 1\times 10^6'/></Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>The first thought on this problem is to solve by using <Text strong>Unified Cost Search (UCS)</Text>. By maintain a fringe of Priority Queue that is sorted according to the time consumes to arrive at a specific position, it is promised that the first state we have met that arrived at the destination will be the state that consumes LEAST time to arrive at the destination.</Paragraph>
<Paragraph>Therefore, we can represent a State <InlineMath math='S'/> in this form</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`
State newState = new State(Time, num, x, y);
`}/>
<Paragraph>And accordingly, the state transition function will be somehow like this</Paragraph>
<SyntaxHighlighter style={lightfair} language={'java'} children={`
public ArrayList<State> StateTransition(State currState){
    int currTime = currState.getTime();
    int num = currState.getNum() + 1;
    int currX = currState.getX();
    int currY = currState.gety();

    ArrayList<State> nextStates = new ArrayList<>();

    Move[] validMove = this.getValidMove(x, y);
    for (Move move : validMove){
        int nextTime = currTime;
        int[] change = move.getChange();
        nextX = currX + change[0];
        nextY = currY + change[1];
        if (num % 3 == 0){ nextTime += this.Time[nextX][nextY] }
        nextStates.add(new State(nextTime, num, nextX, nextY));
    }
}
`}/>
<Title level={4}>*NOT a Pure UCS</Title>
<Paragraph>Specifically, in this question, Bessie can access the field that she has already accessed to avoid eating grass on a field that is extremely time consuming. Therefore, we <Text strong>should not</Text> use a <Text code>HashMap</Text> object to exclude the explored states simply.</Paragraph>
<Paragraph>However, not using a set to exclude visited state will lead to EXTREMELY LARGE FRINGE. Suppose there exist a field where the time required to eat grass is <InlineMath math='T'/>, while all other fields requires <InlineMath math='30T'/> time to eat grass.</Paragraph>
<SyntaxHighlighter style={lightfair} children={`
30T 30T 30T 30T ... 30T
30T T 30T 30T ...30T
30T 30T 30T 30T ... 30T
...
30T 30T 30T 30T ... 30T
`}/>
<Paragraph>In this case, the pure UCS algorithm without excluding repeated state will explore the field with time <InlineMath math='T'/> repeatedly for 30 times (after 30 times, the state (1, 1) is not on the top of PQ), which will build a tree with <Text strong>height of 30</Text> before exploring other states. Since each state can have 4 transition states on average, the fringe will have a size of approx <InlineMath math='4^{30}'/>! This will definitely lead to TLE and we need pruning.</Paragraph>
<Paragraph>Reconsider the state, we can know that each state is defined by two variables - <Text strong>Position</Text> and <Text strong>Number of State transition % 3</Text>. Therefore, we can construct an array <InlineMath math='T_{rec}'/> with size <InlineMath math='N\times N\times 3'/>, where <InlineMath math='T_{rec}[x][y][i]'/> represents the <Text strong>minimum time</Text> it takes for Bessie to get to position (x, y) with step remainder of <InlineMath math='i'/> (somehow similar to Dynamic Programming). If a new state we get from <Text code>getTransitionStates</Text> has the same <Text code>x</Text>, <Text code>y</Text>, and <Text code>i</Text>  with more time, we should simply discard it and does not add it into the fringe.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>Since the time that UCS iterate is not bounded explicitly and there does not has an explicit relationship between data scale and number of iteration, it is hard to calculate accurate time complexity. Below, we will try to estimate an upper bound.</Paragraph>
<Paragraph>First, there are <InlineMath math='N^2'/> vertexes in the graph, suppose each node is explored for <InlineMath math='N'/> time (which is an over-estimation), the time complexity of travel through the graph using UCS is <InlineMath math='O(N^3)'/>. Since each state is push and pop from a priority queue that is maintained using binary heap, the time complexity of push & pop one state is <InlineMath math='O(\log n)'/>. The overall time complexity should be less than <InlineMath math='O(N^3 \log(n))'/>.</Paragraph>
<Paragraph>Since <InlineMath math='3\leq N\leq 100'/>, the time complexity of <InlineMath math='O(N^3 \log{n})'/> is acceptable.</Paragraph>

<Collapse>
    <Panel header="Sample Code for Problem 1 in Java">
        
<SyntaxHighlighter style={lightfair} language={'java'} children={`
import java.util.*;
import java.io.*;

public class USACO2017FebGold1 {
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new FileReader("visitfj.in"));
        PrintWriter pr = new PrintWriter(new BufferedWriter(new FileWriter("visitfj.out")));

        // Read N and T
        StringTokenizer st = new StringTokenizer(br.readLine());
        int N = Integer.parseInt(st.nextToken());
        int T = Integer.parseInt(st.nextToken());

        int[][] grid = new int[N][N];
        int[][][] timeRec = new int[N][N][3];

        for (int x = 0; x < N; x ++){
            for (int y = 0; y < N; y ++){
                for (int z = 0; z < 3; z ++){
                    timeRec[x][y][z] = Integer.MAX_VALUE;
                }
            }
        }

        for (int i = 0; i < N; i ++){
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j ++){ grid[i][j] = Integer.parseInt(st.nextToken()); }
        }

        // Unified Cost Search
        // int leastTimeResult = -1;
        PriorityQueue<State> fringe = new PriorityQueue<>();
        fringe.add(new State(0, 0, 0, 0));

        while (!fringe.isEmpty()){
            State currState = fringe.poll();
            /*if (currState.getX() == N - 1 && currState.getY() == N - 1){
                leastTimeResult = currState.getTime();
                break; // currState is the first state at destination, and is the one that use least time
                // STOP further searching
            }*/

            for (State nextState : getTransitionState(currState, N, T, grid)){
                if (isBetterSolution(nextState, timeRec)){
                    fringe.add(nextState);
                    timeRec[nextState.getX()][nextState.getY()][nextState.getNum()%3] = nextState.getTime();
                }
            }
        }

        int leastTimeResult = Math.min(timeRec[N-1][N-1][0], timeRec[N-1][N-1][1]);
        leastTimeResult = Math.min(leastTimeResult, timeRec[N-1][N-1][2]);

        pr.println(leastTimeResult);


        // Close Buffered Reader & Writer to prevent memory leak.
        pr.close();
        br.close();
    }

    public static boolean isBetterSolution(State nextState, int[][][] timeRec){
        return (nextState.getTime() < timeRec[nextState.getX()][nextState.getY()][nextState.getNum()%3]);
    }

    public static ArrayList<State> getTransitionState(State currState, int N, int T, int[][] grid){
        int currTime = currState.getTime(); int nextNum = currState.getNum() + 1;
        int currX = currState.getX(); int currY = currState.getY();
        ArrayList<String> validMoves = getValidMoves(currState, N);
        ArrayList<State> result = new ArrayList<>();
        for (String move : validMoves){
            int nextTime = currTime;int nextX; int nextY;
            switch (move) {
                case "L":
                    nextX = currX - 1;nextY = currY;break;
                case "R":
                    nextX = currX + 1;nextY = currY;break;
                case "U":
                    nextX = currX;nextY = currY - 1;break;
                default:
                    nextX = currX;nextY = currY + 1;break;
            }

            if (nextNum % 3 == 0) nextTime += grid[nextX][nextY];
            nextTime += T;
            result.add(new State(nextTime, nextNum, nextX, nextY));
        }
        return result;
    }

    public static ArrayList<String> getValidMoves(State currState, int N){
        int x = currState.getX();
        int y = currState.getY();
        ArrayList<String> result = new ArrayList<>();
        if (x - 1 >= 0) result.add("L");
        if (x + 1 < N) result.add("R");
        if (y - 1 >= 0) result.add("U");
        if (y + 1 < N) result.add("D");
        return result;
    }
}

class State implements Comparable<State>{
    private final int time;
    private final int num;
    private final int x;
    private final int y;

    public State(int time, int num, int x, int y) {
        this.time = time;
        this.num = num;
        this.x = x;
        this.y = y;
    }
    public int getTime() { return time; }
    public int getNum() { return num; }
    public int getX() { return x; }
    public int getY() { return y; }

    public int compareTo(State otherState){
        return this.time - otherState.getTime();
        //return (otherState.getX() * otherState.getY() - this.x * this.y);
    }

    @Override
    public String toString(){ return "( " + this.x + " " + this.y + " ), num" + this.num + ""; }

    @Override
    public int hashCode(){ return this.x * this.y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        State state = (State) o;
        return x == state.x && y == state.y;
    }
}`}/>
    </Panel>
</Collapse>
<br/>
<Title level={3}>Problem 2. Why Did the Cow Cross the Road II</Title>
<Title level={4}>Problem Description</Title>
<Paragraph>John have <InlineMath math='N'/> breeds of cows and <InlineMath math='N'/> pastures on both sides of the road separately. Now, all the cows will move from one side of road to the other side. Each breed has a specific ID. Only if the difference of two breed's IDs are smaller than 4, that two breeds will be "friendly" to each other.</Paragraph>
<Paragraph>Given that each pasture can only have at most one link with another pasture on the other side of road and no links can cross over each other, what is the maximum number of links that can be draw between pastures?</Paragraph>
<Title level={4}>Proposed Solution</Title>
<Paragraph>In this problem, we are in fact finding out maximized number of valid pairs on both side of pasture. Suppose the last (right most link) between the pastures are <InlineMath math='(a, b)'/>, where <InlineMath math='a'/> represent the <InlineMath math='a^{th}'/> pasture on upper row and <InlineMath math='b'/> represent the <InlineMath math='b^{th}'/> pasture in the lower row. We can notice that the links that is on the left of <InlineMath math='(a, b)'/> will not affect the links on the right of <InlineMath math='(a, b)'/>.</Paragraph>
<Paragraph>Therefore, we can use dynamic programming to solve this problem. Build up a table <InlineMath math='T'/> of size <InlineMath math='N\times N'/>, <InlineMath math='T[a][b]'/> represent the maximum number of links that can be build on the left of <InlineMath math='(a, b)'/>.</Paragraph>
<Title level={4}>Time Complexity Analysis</Title>
<Paragraph>The total time complexity of this solution is <InlineMath math='O(N^2)'/>. Since <InlineMath math='0\leq N \leq 1000'/>, the problem can be finished in 4 seconds.</Paragraph>
<br/>
</Layout>
);}