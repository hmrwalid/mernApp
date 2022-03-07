import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import { toggleFalse } from '../JS/action/edit';
import { useDispatch } from 'react-redux';
import { UserList } from './UserList';
const Dachbord = () => {
    const dispatch= useDispatch()

  return (
    <div>
      <UserList/>
         
<Link to ="/add">
<Button onClick={()=>dispatch (toggleFalse())}>
    Add Player
  </Button>    
</Link>
    </div>
  )
} 

export default Dachbord