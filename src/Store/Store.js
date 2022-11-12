import {createStore, combineReducers} from 'redux'
import authReducer from "../reducer/AuthReducer";
import userReducer from "../reducer/UsersReducer"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
};


let reducers = combineReducers({
    userReducer: userReducer,
    authReducer : authReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)
let Store = createStore(persistedReducer)
  let persistor = persistStore(Store)
  


export {Store, persistor} ;