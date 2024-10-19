import React from 'react';
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import ResumePage from './ResumePage'
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
          <div>
            <Switch>
                <Route path="/resume">
                  <ResumePage/>
                </Route>
                <Route>
                  <ResumePage/>
                </Route>
            </Switch>
          </div>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
