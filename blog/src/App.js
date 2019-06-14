import React from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlePage from './pages/ArticlePage'
import NotFound from './pages/NotFound'
import ArticlesListPage from './pages/ArticlesListPage'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
      <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route  path="/about" component={AboutPage}/>
      <Route  path="/articles" component={ArticlesListPage}/>
      <Route  path="/article/:name" component={ArticlePage}/>
      <Route component={NotFound}/>
      </Switch>
      </div>
     </Router>
  );
}

export default App;

