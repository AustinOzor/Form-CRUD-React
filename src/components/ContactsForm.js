import React from 'react';
import Contact from './Contact';
import { Row,  } from 'react-bootstrap';
import { connect } from 'react-redux';


const SeeAllUsers = (props) => {
    return (
        <Row>
            
            <h3 className='userTitle'
                style={{
                    backgroundColor: "#012169", textAlign: "center",
                    color: "white", padding: "10px"
                }} >All Users</h3>
         
                {props.users.map((item, index) => {
                    return <Contact
                        userData={item}
                        key={item.id}
                        deleteUser={props.deleteUser}
                        editUser={props.editUser}
                    />
                        
                }
                )}
            
           
        </Row>
    );
}


const mapStateToProps = (state) => {
    return {
     users:state.users   
    }
}
export default connect(mapStateToProps) (SeeAllUsers);
