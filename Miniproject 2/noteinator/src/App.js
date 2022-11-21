/*
This app only works with Chromium Browsers due to limitations and bugs in Firefox's implimetnation of the file system API
*/

import './App.css';

import { Container, Row, Col} from 'react-bootstrap';

import { Route, Switch} from 'react-router-dom';

import Notes from "./pages/Notes"
import NoteView from "./pages/NoteView/NoteView"

function App() {
  
  return (
    <Container fluid id='container' className='view-height bg-dark' onScroll={()=>{console.log("Scrolling")}}>
        
      <Row id='content' className='justify-content-center align-content-start h-75'>
        <Row className='text-center'>
          <h1 className='text-light'>Noteinator</h1>
        </Row>

        <Row  className='justify-content-center align-items-start h-100'>
          <Col xl={9} className='h-100'>
            <Switch>
              <Route exact path="/">
                <Notes/>
              </Route>

              <Route exact path="/noteview">
                <NoteView/>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Row>

        
    </Container>
  );
}

export default App;
