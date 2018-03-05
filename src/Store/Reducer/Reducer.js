import ActionTypes from '../Constant/constant';

const INITIAL_STATE = {
    userName: 'Haider',
    userInfo : []
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
        default:
            return state;
    }

}