import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MainNav from './Components/MainNav/MainNav';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import Events from './Components/Events/Events';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <MainNav></MainNav>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/events">
              <Events></Events>
            </Route>
            <PrivateRoute path="/register/:name">
              <Register></Register>
            </PrivateRoute>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
