import React from 'react';
import './App.css';
import Header from "./components/Header"
import SignUp from "./components/SignUp"
import CourseList from './components/courseList/CourseList';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Header />
          <div className="courseList">
            <CourseList />
          </div>
        </Route>
        <Route path="/signUp">
          <Header />
          <SignUp />
        </Route>
      </Router>
    </div>
  );

}

export default App;
