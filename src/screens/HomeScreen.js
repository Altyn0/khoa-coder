import React,{ useState } from 'react'
const HomeScreen = () => {
   const [name, setName] = useState('');
    return ( 
    <div>
      <p>{name}</p>
    <button onClick={() => setName('Mindx')}> change name </button>
    </div>

     );  
};

export default HomeScreen