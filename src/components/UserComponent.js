import React from 'react'
import TextComponent from './TextComponent';

const UserComponent = (props) => {
  const { name, email ,company } = props ; 
  return (
    <div>
        <h5>tên:  {name} </h5>
        <TextComponent text={`Email:${email}`}/>
        <TextComponent text={`company:${company.name}`}/>
    </div>
  )
}

export default UserComponent