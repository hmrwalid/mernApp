import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editUser, addUser} from '../JS/action/user';
import { Button,  Form } from 'semantic-ui-react'

function Edit  ({userID}) {
    const dispatch= useDispatch()
    const userReducer = useSelector((state=> state.userReducer.user))
    const [user,setUser]= useState({name:"", email :"",
    age:"",
    height :"",
    weight :"",
    stronger_Foot :"",
    image :""
 })
    const edit = useSelector((state)=> state.editReducer.edit)
    console.log(userReducer)
    console.log(edit)

    useEffect(()=>{
        edit? setUser(userReducer): setUser({name:"",
        age:"",  email :"",
        height :"",
        weight :"",
        stronger_Foot :"",
        image :""
     })
    },[userReducer, edit])

    const handleUser =()=>{
      if (!edit){
        dispatch (addUser(user))
      }else{
        dispatch(editUser(userReducer._id, user))
      }
        
    }

    const handleChange= (e)=>{
        e.preventDefault ()
        setUser({...user,[e.target.name]:e.target.value})
    }

  return(
    <Form>
    <Form.Field>
      <label>Name</label>
      <input type="text" placeholder='Name' name ='name' value={user.name} onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>email</label>
      <input type="text" placeholder='email' name ='email' value={user.email} onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>age</label>
      <input type="text" placeholder='age' name='age' value={user.age} onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
     <label> height </label>
      <input type= "text" placeholder='Height' name= 'height' value={user.height} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
     <label> weight </label>
      <input type= "text" placeholder='weight' name= 'weight' value={user.weight} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
     <label> stronger_Foot </label>
      <input type= "text" placeholder='stronger_Foot' name= 'stronger_Foot' value={user.stronger_Foot} onChange={handleChange} />
    </Form.Field>
    
    <Link to="/users" >
    <Button type='submit' onClick={handleUser}>{edit? "Edit" :"Save"}</Button>
    </Link>
  </Form>
  )
};

export default Edit;
