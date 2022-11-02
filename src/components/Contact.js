import React,{useState} from 'react';
import { Modal, Button, Card, Col } from 'react-bootstrap';
import EditContactForm from './EditContactForm';
import { reduxDeleteUser } from '../Actions/UsersActions';
import { connect} from "react-redux";
import { doc, deleteDoc } from "firebase/firestore"
import {db} from '../firebase/config';

const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
   
    //   const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
    //    dispatch(reduxDeleteUser(props.userData.id))
        // props.reduxDeleteUser(props.userData.id)
        try{await deleteDoc(doc(db, "userDetails", props.userData.id));
        }catch(e){console.log(e)}
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Title>
                    Edit User
                    
          </Modal.Title>
                <Modal.Body>
                    <EditContactForm
                        userData={props.userData}
                        editUser={props.editUser}
                        hide={handleClose}
                    />
                </Modal.Body>
        
      </Modal>
            <Col md={4}>
                <Card style={{margin:'0.5rem', backgroundColor:"#3E8EDE", }} className="  text-white">
                   <Card.Body>
            <Card.Title>Name:{props.userData.name}</Card.Title>
            <Card.Text>
            <p>Contact: {props.userData.contact}</p>
            <p>Location: { props.userData.location}</p>
            </Card.Text>
             <Button onClick={handleShow} href="#"
                style={{
                    width: "100px", marginRight: "5px",
                    marginLeft: "10px", fontSize: "15px"
                }} variant="success" size="sm">Edit</Button>
                        
            <Button onClick={handleDelete} href="#" style={{
                width: "100px",
                marginRight: "5px", marginLeft: "10px", fontSize: "15px"
            }} variant="danger" size="sm">Delete</Button>
                  </Card.Body>
                </Card>
            </Col>
        </>
    );
}
const mapDispatchToProps = {
    reduxDeleteUser: reduxDeleteUser,
}
export default connect(null, mapDispatchToProps) (User);
