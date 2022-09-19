import {createStore } from 'redux'
import userReducer from "../reducer/UsersReducer"

let store = createStore(userReducer)

export default store;