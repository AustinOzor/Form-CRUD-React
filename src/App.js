import React, { useState } from "react";
import { Container, Row, Col,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsForm from "./components/ContactsForm";
import AddUsers from "./components/AddUsers";

function App() {
  const [users, setUser] = useState([
    {
    name: "David Andy", contact:"+11656366656", location: "San Diago"
    },
    {
    name: "Frank Moses", contact:"+4475976475", location:"Wincester"
    },
    {
      name: "Cindy Kendy", contact: "+1328565959", location:"San Francisco"
    },
  
  ])
  const addNewUser = (user) => {
    setUser([...users, user])
  }
  return (
    <Container fluid>
      <Row style={{ marginTop: '1rem' }}>
        
        <Col md={4}>
          <AddUsers addUser={addNewUser} />
        </Col>

        <Col md={8}>
          <ContactsForm userData={users} />
        </Col>
      </Row>
   </Container>
  )
}

export default App;