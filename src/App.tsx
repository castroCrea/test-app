import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NoteList from './pages/NoteList/NoteList';
import NoteView from './pages/NoteView/NoteView';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/:id" children={<NoteView />} />
          <Route path="/">
            <NoteList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
