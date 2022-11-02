import React from "react";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import { connect } from "react-redux"
import { reduxEditUser } from "../Actions/UsersActions";
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/config';

const EditContactForm = (props) => {
    const [name, setName] = useState(props.userData.name)
    const [contact, setContact] = useState(props.userData.contact)
    const [location, setLocation] = useState(props.userData.location)

    const handleChange = (e) => {
        setContact(e.target.value);
    };
     const handleEdit = async (e) => {
         e.preventDefault()
        let newInfo = { id: props.userData.id, name, contact, location, };
         const editingUser = doc(db, "userDetails", props.userData.id);

            await updateDoc(editingUser, newInfo);
         
        //  props.reduxEditUser(newInfo)
      //   props.editUser(props.userData.id, { name, contact, location });

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
const mapStateToProps = {
    reduxEditUser : reduxEditUser
}
export default connect(null, mapStateToProps) (EditContactForm);
