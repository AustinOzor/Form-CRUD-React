import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const User = (props) => {
    return (
        <Col md={4}>
            <Card style={{ margin: '0.5rem'}} className=" bg-dark text-white">
       <Card.Body>
        <Card.Title>Name:{props.userData.name}</Card.Title>
        <Card.Text>
        <p>Email: {props.userData.contact}</p>
        <p>Location: { props.userData.location}</p>
        </Card.Text>
        <Button href="#" style={{width: "100px", marginRight:"5px", marginLeft:"10px", fontSize:"15px" }}  variant="primary" size="sm">Edit</Button>
        <Button href="#" style={{width: "100px", marginRight:"5px", marginLeft:"10px", fontSize:"15px" }}  variant="primary" size="sm">Delete</Button>
      </Card.Body>
    </Card>
        </Col>
    );
}

export default User;
