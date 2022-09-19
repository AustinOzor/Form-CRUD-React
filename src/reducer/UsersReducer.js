
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
  
  ]}


let userReducer = (state = initialState, action) => {
    return state
}

export default userReducer;