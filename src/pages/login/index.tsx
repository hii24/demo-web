import React from 'react'
import Backdrop from '../../components/ui/wrappers/backdrop'
import Login from '../../components/general/login/Login'

const LoginPage = () => {

  return (
    <Backdrop>
      <Login />
    </Backdrop>
  )
}

export {
  LoginPage
}