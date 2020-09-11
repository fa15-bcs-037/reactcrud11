import React from 'react';
import Home from './hajira/hajira'
import Update from './components/Update/update'
import Add from './components/Add/add'
import Sec1 from './components/sectionOne/sectionOne'
import Privacypolicy from './components/privacypolicy/privacypolicy'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact={true} component={Home}/>
          <Route path={"/update"} component={Update}/>
            <Route path={"/add"} component={Add}/>
            <Route path={"/sec1"}  component={Sec1}/>
            <Route path={"/privacy-policy"}  component={Privacypolicy}/>
        </Switch>
      </BrowserRouter>

    // {/*<Hajira/>*/}


  )
}

export default App;
