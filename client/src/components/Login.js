import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import { loginUser } from '../JS/action/authAction';

const Login = () => {
  const navigate = useNavigate();

    
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const dispatch = useDispatch()
    const handleLogin = ()=>{
      const newUser = {email,password};
      dispatch(loginUser(newUser))
      navigate("/users")
      setEmail("");
      setPassword("");
    }
  return (
    
    <div>
       <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret" /></a>
                <ul id="login-dp" className="dropdown-menu">
                  <li>
                    <div className="row">
                      <div className="col-md-12">
                       
                        <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password"  required />
                          </div>
                          <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block" onClick={()=>handleLogin()}>Sign in</button>
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

export default Login   