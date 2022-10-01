 export const reduxNewUser = (newUser) => {
    return {
        type: "ADD_NEW_USER",
        payload: newUser
    }
}

export const reduxDeleteUser = (id) => {
    return {
        type: "DELETE_USER",
        payload:id
    }
};
export const reduxEditUser=(updatedInfo)=>{
    return {
        type: "EDIT_USER",
        payload:{updatedInfo}
    }
}