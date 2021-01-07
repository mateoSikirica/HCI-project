import React, {useState} from 'react'
import HeaderFooterLayout from "../layouts/headerFooter"
import GamingUnlocked from "../modules/GamingUnlocked"
 
import {navigate} from 'gatsby'
 
const Profile = () => {
  const [user, setUser] = useState(localStorage.getItem('loggedIn'))
 
  if (!user) {
    setTimeout(() => navigate('/login'), 4000)
    return <p>
      You cannot view this page without login! <br/>You will be redirected to login page shortly
    </p>
  }
 
  return (
    <main>
        <HeaderFooterLayout activeTab="Gaming">
             <GamingUnlocked/>
        </HeaderFooterLayout>
    </main>
  )
}
 
export default Profile