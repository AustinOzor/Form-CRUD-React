import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import {signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebase/config"
import google from "../components/gogole.png"
import login from "../components/login.png"
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom"

function Login() {
  const [email,
    setEmail] = useState("");
  const [password,
    setPassword] = useState("");
  const provider = new GoogleAuthProvider()
  const navigate= useNavigate()

  const handleLogin = async (e) => {
     navigate("/", {replace:true})
    e.preventDefault()
    try {
       const user = await  signInWithEmailAndPassword(auth, email, password)
      console.log(user)
    } catch (e) {
      console.log(e)
    }
    setEmail("")
    setPassword("")
  }


  const logWithGoogle = async(e) => {
    e.preventDefault()
    try {
      const user = await signInWithPopup(auth, provider)

      console.log(user)
    } catch (e) {
      console.log(e)
    }
    setEmail("")
    setPassword("")
  }


  return (
    <Container className="regLogin">

      <Form className="form-body">
        <h3 className="log-here">Login Here</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
       
        <Link to="/" onClick={handleLogin} className="log-google"><img src={login} className="googleLogo" alt=""/>
        </Link>
         <Link to="/" onClick={logWithGoogle} className="log-google"><img src={google} className="googleLogo" alt=""/>
        </Link>

      </Form>
    </Container>
  )
}

export default Login
