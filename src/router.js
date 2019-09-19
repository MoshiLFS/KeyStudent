import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import MRouter from './routes/router.views'
import routers from './routes/router.index'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <MRouter routers = {routers}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
