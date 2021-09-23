import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from './Components/LoginRegister/signin';
import Signup from './Components/LoginRegister/signup';
import Homepage from "./Components/Homepage/homepage";
import Profile from "./Components/Dashboard/profile";
import Users from "./Components/Dashboard/users/users";
import Newuser from "./Components/Dashboard/users/newuser";
import Edituser from "./Components/Dashboard/users/edituser";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/add" component={Newuser}/>
          <Route exact path="/users/edit/:id" component={Edituser}/> 
          

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
