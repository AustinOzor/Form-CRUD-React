import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";

const EditContactForm = (props) => {
    const [name, setName] = useState(props.userData.name)
    const [contact, setContact] = useState(props.userData.contact)
    const [location, setLocation] = useState(props.userData.location)

    const handleChange = (e) => {
        setContact(e.target.value);
    };
     const handleEdit = (e) => {
         e.preventDefault()
         props.editUser(props.userData.id, { name, contact, location });

         setName("");
         setContact("");
         setLocation("");
         props.hide()
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

            <Button variant="primary" type="submit" onClick={handleEdit}>
                Save
            </Button>
         </Form>    
        
    );
}

export default EditContactForm;
