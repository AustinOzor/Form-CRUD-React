
let initialState = {
 users: [
    {id:'1',
    name: "David Andy", contact:"+11656366656", location: "San Diago"
    },
    {id:'2',
    name: "Frank Moses", contact:"+4475976475", location:"Wincester"
    },
    {id:'3',
      name: "Cindy Kendy", contact: "+1328565959", location:"San Francisco"
    },
    {id:'4',
      name: "Kante Kendy", contact: "+1328565959", location:"San Francisco"
    },
  
  ]}


let userReducer = (state = initialState, action) => {
  switch(action.type) {
    case "ADD_NEW_USER":
      return {
        ...state, users: [...state.users, action.payload]
      };
    case "DELETE_USER":
      const unDeletedUsers = state.users.filter((user) => 
        user.id!==action.payload)
      return {
        ...state, users:unDeletedUsers
      }    
    
    case "EDIT_USER":
      const updatedUsersInfo = state.users.map((user)=>{
        if(user.id===action.payload.updatedInfo.id){
          return action.payload.updatedInfo;
        }
        else {return user}
      })
      return {...state, users:updatedUsersInfo}
    
     default:
    return state
      };    
  }

export default userReducer;