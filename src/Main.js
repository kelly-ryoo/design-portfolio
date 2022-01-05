import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DesignArt from './DesignArt';
import Websites from './websites';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={DesignArt}></Route>
      <Route exact path='/websites' component={Websites}></Route>
    </Switch>
  );
}

export default Main;