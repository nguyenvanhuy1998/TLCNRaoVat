import * as types from '../actions/actionsTypes'
const initialState = {
    user:{},
}
const User = (state = initialState, action) => {
    if(action.type === types.USER.SET){
        return { user: {}, ...action.data } || {
            user: {}
        };
    }
}
export default User;
