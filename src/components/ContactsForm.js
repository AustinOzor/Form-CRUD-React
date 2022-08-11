import React from 'react';
import Contact from './Contact';
import { Row,  } from 'react-bootstrap';

const SeeAllUsers = (props) => {
    return (
        <Row>
            
                <h1 className='userTitle' text style={{textAlign: 'center'}} >All Users</h1>
         
                {props.userData.map((item, index) => {
                    return <Contact userData={item } key={index} />

                }
                )}
            
           
        </Row>
    );
}



export default SeeAllUsers;
