
import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Main from './Main';
function App() {
  return (
    <Container>
        <Navbar />
        <Main />
    </Container>
  );
}

export default App;
const Container = styled.div`
  display : flex;
  height:100vh;
  width:100%;
  background-color:black;



`