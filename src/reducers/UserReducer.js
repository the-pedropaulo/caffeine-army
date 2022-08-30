const initialState = {
    token: '',
    name: '',
    refresh_token: '',
    first_login: '',
    email: '',
    role: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state, 
                token: action.payload.token,
                name: action.payload.name,
                refresh_token: action.payload.refresh_token,
                first_login: action.payload.first_login,
                email: action.payload.email,
                role: action.payload.role,

            };
        case 'LOGOUT':
            return {
                ...state, 
                token: '',
                name: '',
                refresh_token: '',
                first_login: '',
                email: '',
                role: '',

            };
        default:
            return state;
    }
}