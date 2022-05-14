import { combineReducers } from 'redux';
import list from './list';
const appReducer = combineReducers({
    list
});
const rootReducer = (state, action) => {
    return appReducer(state, action)
}
export default rootReducer;