import React from 'react'
import CustomButton from './shared/CustomButton'

export default function User(props) {

  return (
    <div className='user'>
          <h2>My name is {props.name}</h2>
          <h3>My email is {props.email}</h3>
          <CustomButton text='update' color='primary'/>
          <CustomButton text='delete' color='danger'/>
    </div>
  )
}