import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap"
import AddUsers from "../components/AddUsers"
import ContactsForm from "../components/ContactsForm"
import {  signOut } from "firebase/auth"
import { auth } from "../firebase/config"


function HomePage() {

  const SignOut = async (e) => {
    e.preventDefault();
    try{signOut(auth)}
    catch(e){
      console.log(e)
    }
}


  return (
     <Container fluid style={{fontFamily:"Times New Roman"}}>
        <Row style={{ marginTop: '1rem' }}>
      
          <Col md={4}>
          {<AddUsers
            // addUser={addNewUser}
          />}
          </Col>
          <Col md={8}>
          <ContactsForm
            // userData={users}
            // deleteUser={deleteUser}
            // editUser={editUser}
          />
        </Col>
        
      </Row>
      <Row>
        <Col md={1}>
          <Button variant="danger" onClick={SignOut} className="sign-out">Signout</Button>
        </Col>
      </Row>

         </Container>
  )
}

export default HomePage

