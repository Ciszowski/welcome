import * as types from './constants/searchTypes';
const initialState = 
{
    status: 'WAITING',
    presentation : {},
    modals : {},
    isOpen : false
};

const welcomeRX = (state = initialState, action = {}) =>
{
    switch(action.type)
    {
        case types.WELCOME:
            return {
                ...state,
                presentation : {...state.presentation, ...action.presentation},
                modals : {...state.modals, ...action.modals},
                status : 'DONE'
            }
        case types.HANDLECLICK: 
            return {
                ...state,
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}

export {welcomeRX as default }