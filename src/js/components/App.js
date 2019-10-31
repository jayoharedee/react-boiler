import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import example from './example'

const App = () => {
  return (
    <Router>
      {/* <TopNav /> */}
      <Route exact path="/" component={example} />
      <Route exact path="/example" component={example} />
      {/* <Route exact path="/about" component={Placeholder} />
      <Route exact path="/studys" component={Placeholder} />
      <Route exact path="/portfolio" component={Placeholder} />
      <Route exact path="/awards" component={Placeholder} />
      <Route exact path="/contact" component={Placeholder} /> */}
    </Router>
  )
}

export default App
