import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, query,  onSnapshot, orderBy} from "firebase/firestore";
import { db, auth } from "./firebase/config"
import { reduxNewUser } from "./Actions/UsersActions"
import { newLogin } from "./Actions/AuthAction"
import { useDispatch, connect } from "react-redux"
import Routing from "./Routing";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
     const q = query(collection(db, "userDetails"), orderBy("timestamp","asc"));
     onSnapshot(q, (querySnapshot) => {
      const contacts = [];
      querySnapshot.forEach((doc) => {
      contacts.push(doc.data());
      });
       dispatch(reduxNewUser(contacts))
  console.log(contacts);
});

    }
    readData()
  })

  useEffect (()=>{
    onAuthStateChanged(auth, (user) => {
    if(user)dispatch(newLogin(user))
    
    else {
      dispatch(newLogin(null))
    }
      //this is for connect
      // if (user)props.newLogin(user)
      // else props.newLogin(null)
          })
  })
  // useEffect(() => {
  //   const readData = async () => {
  //     const q = query(collection(db, "userContacts"), orderBy("name", "asc"));
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       const contacts = [];
  //       querySnapshot.forEach((doc) => {
  //         contacts.push(doc.data());
  //       });
  //       dispatch(reduxNewUser(contacts))
  //       console.log(contacts);
  //     });
  //   };
  //   readData()
  // },[])
  // // const [users, setUser] = useState([
  //   // {id:'1',
  //   // name: "David Andy", contact:"+11656366656", location: "San Diago"
  //   // },
  //   // {id:'2',
  //   // name: "Frank Moses", contact:"+4475976475", location:"Wincester"
  //   // },
  //   // {id:'3',
  //   //   name: "Cindy Kendy", contact: "+1328565959", location:"San Francisco"
  //   // },
  
  // ]);
  // const addNewUser = (user) => {
  //   user.id=Math.random().toString()
  //   setUser([...users, user])

  // }
  // const deleteUser = (id) => {
  //   setUser(users.filter((user)=> {
  //     if (user.id !== id) {
  //       return deleteUser
  //     }
  //     return user
  //   }));
  // };
  // const editUser = (id, updatedInfo) => {
  //   setUser(users.map((user) => {
  //     if (user.id === id) {
  //       return updatedInfo
  //     }
  //     return user
  //   }))
  // };
  return (
    
    
        
      <Routing />
    
    
  );
}
const mapDispatchToProps = {
  newLogin: newLogin
}
export default connect(null, mapDispatchToProps)(App); 
