import React from 'react'
import {Switch, Route} from 'react-router-dom'
import HomeComponent from '../components/index'




const Routes = () => {

return (

  <Switch> 
    
    <Route path='/' exact component={HomeComponent} />

  </Switch>
  )
}

export default Routes