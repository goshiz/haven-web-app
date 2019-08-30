import {
    ACCOUNT_CREATED, ACCOUNT_CREATION_FAILED, ACCOUNT_CREATION_REQUESTED
} from "../actions/types";
import {getMessageOfError} from "../utility";

const INITIAL_STATE = { accountCreated: false, status:"", startHeight:-1, newAddress:false, isFetching: false, error:null};

export const account = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACCOUNT_CREATED:
            return { ...action.payload, isFetching:false, error:null };
        case ACCOUNT_CREATION_REQUESTED:
            return {...state, isFetching:true, error:null};
        case ACCOUNT_CREATION_FAILED:
            return {...state, isFetching:false, error:action.payload};
        default:
            return state;
    }
}

export const selectIsLoggedIn = (state) => {
  return state.account.status === "success";
};

export const selectIsRequestingLogin = (state) => {

    return state.account.isFetching;
};

export const selectErrorMessageForLogin = (state) => {
    if (state.account.error !== null)
    {
        return getMessageOfError(state.account.error);
    }
    return "";
};