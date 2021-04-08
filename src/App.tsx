import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NoteList from './pages/NoteListView/NoteList';
import NoteListView from './pages/NoteListView/NoteListView';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/:id" children={<NoteListView />} />
          <Route path="/">
            <NoteList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
