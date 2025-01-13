import React from 'react'
import { useLocation } from 'react-router-dom'

const Edit = () => {
  const location = useLocation()
  const profile = location.state
  console.log(profile)

  return (
    <div>{ profile.firstname}</div>
  )
}

export default Edit