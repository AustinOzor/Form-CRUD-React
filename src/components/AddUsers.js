import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { reduxNewUser } from "../Actions/UsersActions";
import { connect } from "react-redux"
import { v4 as uuid } from 'uuid';
import {db} from "../firebase/config"
import {doc, setDoc} from "firebase/firestore"
const AddUsers = (props) => {
    const [name, setName] = useState("")
    const [contact, setContact] = useState("")
    const [location, setLocation] = useState("")

    const handleChange = (e) => {
        setContact(e.target.value);
        console.log(contact)
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        //props.newUser({name, contact, location})
        //props.reduxNewUser({name,contact,location})
        // props.reduxNewUser({ id: uuid(), name, contact, location })
        let newUser = { id: uuid(), name, contact, location }
        try { await setDoc(doc(db, "userContacts", newUser.id), newUser); }
        catch(e){console.log(e)
    }
        
        //     const docRef = await addDoc(collection(db, "contacts"), {
        //       id: uuid(), name, contact, location
        //   });
        setName("")
        setContact("")
        setLocation("")
    };
   return (
        
       <Form><h3 style={{backgroundColor:"#012169", textAlign:"center", color:"white",padding:"10px"}}>Add New Contact Here</h3>
            
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
               <Form.Control type="number" placeholder="Contact"
                   value={contact} onChange={handleChange} />
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
const mapDispatchToProps = {
reduxNewUser: reduxNewUser,
}

export default connect(null, mapDispatchToProps) (AddUsers);
