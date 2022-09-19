import React, { useState } from "react";
import { Container, Row, Col,  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactsForm from "./components/ContactsForm";
import AddUsers from "./components/AddUsers";

function App() {
  const [users, setUser] = useState([
    {id:'1',
    name: "David Andy", contact:"+11656366656", location: "San Diago"
    },
    {id:'2',
    name: "Frank Moses", contact:"+4475976475", location:"Wincester"
    },
    {id:'3',
      name: "Cindy Kendy", contact: "+1328565959", location:"San Francisco"
    },
  
  ])
  const addNewUser = (user) => {
    user.id=Math.random().toString()
    setUser([...users, user])

  }
  const deleteUser = (id) => {
    setUser(users.filter((user)=> {
      if (user.id !== id) {
        return deleteUser
      }
      return user
    }));
  };
  const editUser = (id, updatedInfo) => {
    setUser(users.map((user) => {
      if (user.id === id) {
        return updatedInfo
      }
      return user
    }))
  };
  return (
    
      <Container fluid style={{fontFamily:"Times New Roman"}}>
        <Row style={{ marginTop: '1rem' }}>
      
          <Col md={4}>
            <AddUsers addUser={addNewUser} />
          </Col>
          <Col md={8}>
            <ContactsForm userData={users} deleteUser={deleteUser} editUser={editUser} />
          </Col>
        </Row>
         </Container>
    
  )
}

export default App; 
