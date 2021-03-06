import React from 'react'
import { Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Login from './Login';
import Register from './Register';



const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-inverse" role="navigation">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Login dropdown</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
            
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider" />
                  <li><a href="#">Separated link</a></li>
                  <li className="divider" />
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
            <Register/>
            <Login/>
            
           
          </div>{/* /.navbar-collapse */}
        </div>{/* /.container-fluid */}
      </nav>
    </div>
  )
}

export default Nav