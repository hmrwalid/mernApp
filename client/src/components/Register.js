import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { registerUser } from '../JS/action/authAction';
const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [name, setName] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');
const handleRegister = ()=>{
  const newUser = {name,email,password};
  dispatch(registerUser(newUser))
  navigate("/users")
  setName("");
  setEmail("");
  setPassword("");
}
   
  return(
    <div>
       <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>register</b> <span className="caret" /></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div className="row">
                      <div className="col-md-12">
                       
                        <form className="form" role="form" method="post" action="register" acceptCharset="UTF-8" id="login-nav">
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail2" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} name="name"  required />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)} name="email"  required />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"  required />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>handleRegister()}>Sign in</button>
                          </div>
                          <div className="checkbox">
                            <label>
                              <input type="checkbox" /> keep me logged-in
                            </label>
                          </div>
                        </form>
                      </div>
                      
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
    </div>
  )
}

export default Register