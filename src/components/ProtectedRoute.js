import React from 'react'
import { connect, useSelector } from "react-redux"
import {Navigate} from "react-router-dom"

function ProtectedRoute({children, users}) {
    if(!users)return <Navigate to="/login" replace={true} />
  return children;
}
const mapStateToProps =(state)=>{
  return{
      users: state.authReducer.logInUsers,
    }
}

export default connect(mapStateToProps)(ProtectedRoute);


