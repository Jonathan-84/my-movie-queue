import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Queue from './pages/Queue'
import Favorites from './pages/Favorites';
import './app.css';

import React from 'react';


// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

require('dotenv').config()

//this key is showing up just fine
//console.log(process.env.REACT_APP_TMD_API_KEY)


const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '' 
      }
    })
  },
  uri: "/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/queue" component={Queue} />
            <Route exact path="/favorites" component={Favorites} />
            <Route render={() => <h1 className="title-text main-container">This Page Does Not Exist!</h1>} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}
// always export our component function so we can use it in other files
export default App;
