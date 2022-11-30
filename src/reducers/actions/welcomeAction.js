import * as types from '../constants/searchTypes';
import getIntro from "../../component/api/getIntroduction";

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
export function welcomeAction(s) {
    return (dispatch) =>
    {
        welcomeApi(dispatch);
    };
}