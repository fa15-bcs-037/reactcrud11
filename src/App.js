import React from 'react';
import Hajira from './hajira/hajira'
import Update from './components/Update/update'
import Add from './components/Add/add'
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact={true} component={Hajira}/>
          <Route path={"/update"} component={Update}/>
            <Route path={"/add"} component={Add}/>
        </Switch>
      </BrowserRouter>

    // {/*<Hajira/>*/}


  )
}

export default App;
