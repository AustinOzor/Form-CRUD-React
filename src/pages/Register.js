import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from "../firebase/config"
import signup from "../components/signup.png"
import signInGoogle from "../components/gogole.png"
import { Link } from "react-router-dom"
import {useNavigate} from "react-router-dom"

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    navigate("/login", {replace:true})
    e.preventDefault()
    try {
       const user = await  createUserWithEmailAndPassword(auth, email, password)
       console.log(user)
    } catch (e) {
      console.log(e)
    }
    setEmail("")
    setPassword("")
}

  const google = async(e) => {
    e.preventDefault()
    try {
      const user = await signInWithPopup(auth, provider);
      //  const user = await  createUserWithEmailAndPassword(auth, email, password)
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
         <h3 className="log-here">Register</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(e) =>
              setEmail(e.target.value)}
          />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) =>
              setPassword(e.target.value)}
          />
      </Form.Group>
     
       {/* <Button variant="primary" type="submit" onClick={handleRegister} className="submit--btn">
        Submit
        </Button>  */}
        <Link to="/" onClick={handleRegister} className="log-google"><img src={signup} className="googleLogo" alt="" /> </Link>
        <Link to="/" onClick={google} className="log-google"><img src={signInGoogle} className="googleLogo" alt="" /> </Link>
    </Form>
    </Container>
  )
}

export default Register
