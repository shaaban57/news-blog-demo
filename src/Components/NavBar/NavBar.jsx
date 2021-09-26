import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white mb-3 fixed">
  <div className="container-fluid">
    <a className="nav-link" href="/">Shaaban News Demo</a>
    {/* <Link className="navbar-brand" to="/">Shaaban News Demo</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">home</a>
          {/* <Link className="nav-link" to="/">Home</Link> */}
        </li>
        <li className="nav-item">
          
          <Link className="nav-link" to="/news">News</Link>
        </li>
        <li className="nav-item " >
          <Link className="nav-link" to="/finance">Finance</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar
