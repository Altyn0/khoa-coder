import React from 'react'
import { users } from '../data/Users'
import UserComponent from '../components/UserComponent'
import HeaderComponent from '../components/HeaderComponent';
import TextComponent from '../components/TextComponent';
import CardComponent from '../components/CardComponent';
const HomeScreen = () => {
    return( <div> 
      <HeaderComponent/>

     <CardComponent color='coral'>
      <p>Profile Screen</p>
        </CardComponent>

     <CardComponent  color='coral'>
      <p>HomeScreen</p>
        

      {users.map((user) =>
        (<UserComponent 
          key ={user.id} 
          name={user.name} 
          email={user.email} 
          company={user.company} />
      ))}
      </CardComponent>
    </div>
     ) ;  
};

export default HomeScreen