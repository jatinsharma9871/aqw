import { createStore, combineReducers,applyMiddleware, } from "redux"
import { reducer as TodoReducer} from "../features/Todo/Reducer"
import { LogInReducer } from "../features/LogIn/Reducer"

const rootReducer = combineReducers({
    todoReducer: TodoReducer,
    logInReducer:LogInReducer
})
export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__())