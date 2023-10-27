import React from 'react'
import { users } from '../data/Users'
import UserComponent from '../components/UserComponent'
import HeaderComponent from '../components/HeaderComponent';
import TextComponent from '../components/TextComponent';
const HomeScreen = () => {
    return( <div> 
      <HeaderComponent/>
      {users.map((user) =>
        (<UserComponent 
          key ={user.id} 
          name={user.name} 
          email={user.email} 
          company={user.company} />
      ))}
    </div>
     ) ;  
};

export default HomeScreen