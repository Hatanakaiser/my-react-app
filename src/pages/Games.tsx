// import React from 'react'

import { Link } from "react-router-dom"
import { ROUTES } from "../const"

export default function Games() {
  return (
    <>
      <h1>Games</h1>
      <div>鋭意制作中</div>
      <Link to={ROUTES.HOME}>HOME</Link>
    </>
  )
}

