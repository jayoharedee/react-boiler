import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Example from './example'

const App = () => {
  return (
    <Router>
      {/* <TopNav /> */}
      <Route exact path="/" component={Example} />
      <Route exact path="/example" component={Example} />
    </Router>
  )
}

export default App
