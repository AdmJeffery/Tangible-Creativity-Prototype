import React from 'react'
import Table from "../components/AdminTable/index"
import LoginButton from '../components/LoginButton'
import LogoutButton from '../components/LogoutButton'

export default function Admin() {
  return (
    <div>
      <Table/>
      <LoginButton/>
      <br></br>
      <LogoutButton/>
    </div>        
        
        
     
)}
