import React from 'react';

import styled from 'styled-components'
import StatsView from './StatsComponents/StatsView';


const Container = styled.div`

  height: 100vh;
  width: 100vw;

  background: rgb(113, 19, 11);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Main = styled.div`

  height: calc(100vh - 60px);
  width: 100vw;

  overflow: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    height: calc(100vh - 42px);
  }
`

const App = props => {

  // const [difficulty, setDifficulty] = useState("easy")

  return (
    <Container>
      {/* <Header /> */}
      <Main>
        <div>sup friend</div>
        <StatsView />
      </Main>
    </Container>
  );
}

export default App;



    /**
     * 
     * 
     *                        App  --------------------------------   App
     *                   /            \                                 |                                     
     *                Header          MapView                       StatsView                                                          
     *                                                            /          \                               
     *                                                   StatsContainer      ChartContainer                                       
     *                                                         /|\                  /         \                 
     *                                                       YearStat             Chart       Chart Options                 

     *                                                                                                     
     *                                                                                                     
     * 
     * 
     * 
     * 
     * 
     * 
     */