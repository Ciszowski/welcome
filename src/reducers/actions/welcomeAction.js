import * as types from '../constants/searchTypes';
import getIntro from "../../component/api/getIntro";

function welcomeApi(dispatch)
{
    getIntro((data) => {
        dispatch({
            type: types.WELCOME,
            presentation : data.presentation,
            modals : data.modals
        })
    })
}
export function welcomeAction() {
    return (dispatch) =>
    {
        welcomeApi(dispatch);
    }
}