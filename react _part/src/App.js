import React from 'react';
import { Route, Switch,  } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Signin from './Components/LoginRegister/signin';
import Signup from './Components/LoginRegister/signup';
import Homepage from './Components/Homepage/homepage';
import Profile from "./Components/Dashboard/profile";
import Users from "./Components/Dashboard/users/users";
import Newuser from "./Components/Dashboard/users/newuser";
import Edituser from "./Components/Dashboard/users/edituser";
import Shops from "./Components/Dashboard/shops/shops";
import Newshop from "./Components/Dashboard/shops/newshops";
import Editshop from "./Components/Dashboard/shops/editshops";
import Addshop from "./Components/shopsp/addshop"
import Shopsp from './Components/shopsp/shopsp';


import './App.css';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/" component={Homepage} />
                <Route exact path="/HomePage" component={Homepage} />
                <Route path="/profile" component={Profile} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/add" component={Newuser} />
                <Route exact path="/users/edit/:id" component={Edituser} />
                <Route exact path="/shops" component={Shops} />
                <Route exact path="/shops/add" component={Newshop} />
                <Route exact path="/shops/edit/:id" component={Editshop} />
                <Route exact path="/shopsp" component={Shopsp}/>
                <Route exact path="/addshop" component={Addshop}/>

                
            </Switch>
        </BrowserRouter>
        


    </div>
  );
}

export default App;
