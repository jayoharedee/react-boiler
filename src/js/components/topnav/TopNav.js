import React from 'react'
//import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
// import FontAwesome from '../fontawesome'

function TopNav() {
  // const [visible, setVisible] = useState(true);

  // function showMe() {
  // console.log(visible)
  // setVisibile(false)
  // console.log(visible)
  // }

  return (
    <nav>
      <ul className="menu">
        <li className="item">
          <Link to="/">Main</Link>
        </li>
        <li className="item">
          <Link to="/projects">Example route</Link>
        </li>
        {/* <li className="item">
          <Link to="/studys">CASE STUDY</Link>
        </li>
        <li className="item">
          <Link to="/portfolio">PORTFOLIO</Link>
        </li>
        <li className="item">
          <Link to="/awards">AWARDS</Link>
        </li>
        <li className="item">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className={`toggle`}>
          <Link to="/awards" onClick={showMe}>
            <FontAwesome iconNames="fas fa-bars" />
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default TopNav
