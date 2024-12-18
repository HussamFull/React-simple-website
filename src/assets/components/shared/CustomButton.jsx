import React from 'react'

export default function CustomButton({text,color}) {

    let btnClass = 'btn rounded-pill shadow m-1 p-3 btn-outline-'
    btnClass+=color;

  return (
    <button className={btnClass}>{text}</button>
  )
}