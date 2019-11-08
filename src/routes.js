import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dash from './components/Dash/Dash'
import Wizard from './components/Wizard/Wizard'

export default (
  <Switch>
    <Route exact path='/' component={Dash} />
    <Route path='/wizard' component={Wizard} />
  </Switch>
)