import React,{ useState } from 'react'
const HomeScreen = () => {
   const [name, setName] = useState(0);
    return ( 
    <div>
      <p>{name}</p>
    <button onClick={() => setName(Math.floor(Math.random()*100))}> change name </button>
    </div>

     );  
};

export default HomeScreen