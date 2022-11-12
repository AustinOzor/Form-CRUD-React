let initialState = {
    logInUsers: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_LOGIN_USER":
            return {
                ...state, logInUsers: action.payload
            };
    default: return state
    }
}

export default authReducer;