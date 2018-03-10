import ActionTypes from '../Constant/constant';

const INITIAL_STATE = {
    userName: 'Haider',
    userInfo : [],
    currentUser : []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.USERINFO:
            return ({
                ...state,
                userInfo: action.payload
            })
            case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })
        default:
            return state;
    }

}