/*
This app only works with Chromium Browsers due to limitations and bugs in Firefox's implimetnation of the file system API
*/

import './App.css';

import React, { useState } from 'react';

import { Container, Row} from 'react-bootstrap';

import { Route, Switch, Link } from 'react-router-dom';

import Notes from "./pages/Notes"
import NoteView from "./pages/NoteView"

function App() {
  return (
    <Container className='mx-auto'>
      <Row className='text-center'>
        <h1>Noteinator</h1>
      </Row>

      <Switch>
        <Route exact path="/">
          <Notes/>
        </Route>

        <Route exact path="/noteview">
          <NoteView/>
        </Route>
      </Switch>

    </Container>
  );
}

export default App;
