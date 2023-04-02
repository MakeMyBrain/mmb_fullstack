import React from 'react'
import {Users} from './Users'

export const Cards = () => {
  return (
    <ul className='list'>
     {
      Users.map((user) => (
        <div className='listItem'>{user.name}<br/>{user.company}&nbsp;{user.mode}<br/><br/></div>
      ))
     }
    </ul>
  )
}
