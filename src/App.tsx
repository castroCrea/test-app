import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NoteListView from './pages/NoteListView/NoteListView';
import NoteView from './pages/NoteView/NoteView';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <section>
          <Switch>
              <Route path="/:id" children={<NoteView />} />
              <Route path="/">
                <NoteListView />
              </Route>
            </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
