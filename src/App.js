import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Register from './components/auth/register/Register'
import Login from './components/auth/login/Login'
import Task from "./components/tasks/Task";
import Nav from "./components/common/appbar/Nav";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/task">
            <Task />
          </Route>
          <Route path="/nav">
            <Nav />
          </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
