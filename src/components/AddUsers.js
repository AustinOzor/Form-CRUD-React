import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";

const AddUsers = (props) => {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [location, setLocation] = useState("")

    const handleChange = (e) => {
        setContact(e.target.value);
        console.log(contact)
    };
     const handleSubmit = (e) => {
         e.preventDefault()
         props.addUser({name, contact, location})
     }
   return (
        
           <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Name" value={name}
                   onChange={(e) => {
                   setName(e.target.value)
                       console.log(name)
                    }} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact</Form.Label>
                <Form.Control type="number" placeholder="Contact" value={contact} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Location</Form.Label>
               <Form.Control type="text" placeholder="Location" value={location}
                   onChange={(e) => {
                       setLocation(e.target.value);
                       console.log(location)
               }} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add User
            </Button>
         </Form>    
        
    );
}

export default AddUsers;
