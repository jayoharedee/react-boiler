import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Example from './example'

const App = () => {
  return (
    <Router>
      {/* <TopNav /> */}
      <Route exact path="/" component={Example} />
      <Route exact path="/example" component={Example} />
      {/* <Route exact path="/about" component={Placeholder} />
      <Route exact path="/studys" component={Placeholder} />
      <Route exact path="/portfolio" component={Placeholder} />
      <Route exact path="/awards" component={Placeholder} />
      <Route exact path="/contact" component={Placeholder} /> */}
    </Router>
  )
}

export default App
